package web.rutina.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import web.rutina.Service.OpenAiService;


import java.util.Map;

@RestController
@RequestMapping("/api/chatgpt")
public class ChatGptController {

    @Autowired
    private OpenAiService openAiService;

    /**
     * ChatGPT와 상호작용하는 엔드포인트
     * @param request 프롬프트를 포함한 요청
     * @return ChatGPT의 응답
     */
    @PostMapping("/ask")
    public String askChatGpt(@RequestBody Map<String, String> request) {
        String prompt = request.get("prompt");
        if (prompt == null || prompt.isEmpty()) {
            throw new IllegalArgumentException("Prompt must not be null or empty");
        }
        return openAiService.generateChatGptResponse(prompt);
    }
}
