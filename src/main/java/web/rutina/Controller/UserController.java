package web.rutina.Controller;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.rutina.JwtUtil;
import web.rutina.Model.User;
import web.rutina.Service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;
    private final JwtUtil jwtUtil;

    public UserController(UserService userService, JwtUtil jwtUtil) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    /** localhost:8080/api/user/signup
     * 회원가입 API
     */
    @PostMapping("/signup")
    public ResponseEntity<String> signup(@RequestBody User user) {
        userService.registerUser(user.getUsername(), user.getPassword(), user.getName());
        return ResponseEntity.ok("회원가입 성공");
    }

    /**
     * 로그인 API
     */
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        User authenticatedUser = userService.authenticateUser(user.getUsername(), user.getPassword());
        String token = jwtUtil.generateToken(authenticatedUser.getUsername());
        return ResponseEntity.ok(token);
    }
}
