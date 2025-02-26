package web.rutina.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.rutina.Model.User;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
}
