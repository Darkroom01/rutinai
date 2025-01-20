package web.rutina.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.rutina.Model.ScheduleRequest;
import web.rutina.Service.OpenAiService;

@RestController
@RequestMapping("/api/schedule")
public class ScheduleController {

    private final OpenAiService openAiService;

    @Autowired
    public ScheduleController(OpenAiService openAiService) {
        this.openAiService = openAiService;
    }

    @PostMapping
    public ResponseEntity<String> generateSchedule(@RequestBody ScheduleRequest scheduleRequest) {
        // Prompt 생성
        String prompt = createPrompt(scheduleRequest);

        // ChatGPT로 스케줄 생성
        String response = openAiService.generateChatGptResponse(prompt);

        return ResponseEntity.ok(response);
    }

    private String createPrompt(ScheduleRequest request) {
        StringBuilder prompt = new StringBuilder();
        prompt.append("다음 정보를 기반으로 하루 스케줄을 생성해 주세요: (ex:7시 기상, 8시 독서)\n");
        prompt.append("기상 시간: ").append(request.getWakeUpTime()).append("\n");
        prompt.append("취침 시간: ").append(request.getBedTime()).append("\n");
        if (request.getFixedTimes() != null && !request.getFixedTimes().isBlank()) {
            prompt.append("고정 시간:\n").append(request.getFixedTimes()).append("\n");
        }
        if (request.getTasks() != null && !request.getTasks().isBlank()) {
            prompt.append("할일 목록:\n").append(request.getTasks()).append("\n");
        }
        prompt.append("남는 시간에 작업을 효율적으로 배치해 주세요.");
        return prompt.toString();
    }
}
