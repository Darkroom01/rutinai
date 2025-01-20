package web.rutina.Service;

import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Map;

@Service
public class OpenAiService {

    private final WebClient webClient;

    public OpenAiService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder
                .baseUrl("https://api.openai.com/v1/chat/completions")
                .defaultHeader("Authorization", "Bearer YOUR_API_KEY")
                .defaultHeader("Content-Type", "application/json")
                .build();
    }

    public String generateChatGptResponse(String prompt) {
        var requestBody = Map.of(
                "model", "gpt-3.5-turbo",
                "messages", List.of(
                        Map.of("role", "system", "content", "You are a helpful assistant specializing in schedule management."),
                        Map.of("role", "user", "content", prompt)
                )
        );

        return webClient.post()
                .bodyValue(requestBody)
                .retrieve()
                .bodyToMono(Map.class)
                .map(response -> {
                    Map<String, Object> choices = ((List<Map<String, Object>>) response.get("choices")).get(0);
                    Map<String, Object> message = (Map<String, Object>) choices.get("message");
                    return (String) message.get("content");
                })
                .block();
    }
}
