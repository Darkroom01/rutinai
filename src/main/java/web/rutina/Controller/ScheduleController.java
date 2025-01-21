package web.rutina.Controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import web.rutina.Service.OpenAiService;

@RestController
@RequestMapping("/api/schedule")
public class ScheduleController {

    private final OpenAiService openAiService;

    public ScheduleController(OpenAiService openAiService) {
        this.openAiService = openAiService;
    }

    /**
     * 스케줄 생성 엔드포인트
     * @param wakeUpTime 기상 시간
     * @param bedTime 취침 시간
     * @param tasks 할일 목록
     * @return ChatGPT에서 생성된 스케줄
     */
    @GetMapping("/generate/{wakeUpTime}/{bedTime}/{tasks}")
    public ResponseEntity<?> generateSchedule(
            @PathVariable String wakeUpTime,
            @PathVariable String bedTime,
            @PathVariable String tasks) {
        try {
            System.out.println("wakeUpTime: " + wakeUpTime);
            System.out.println("bedTime: " + bedTime);
            System.out.println("tasks: " + tasks);

            String prompt = createPrompt(wakeUpTime, bedTime, tasks);
            String schedule = openAiService.generateChatGptResponse(prompt);
            System.out.println(schedule);
            return ResponseEntity.ok(schedule);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("스케줄 생성 중 오류가 발생했습니다: " + e.getMessage());
        }
    }


    /**
     * 스케줄 생성 프롬프트 작성
     * @param wakeUpTime 기상 시간
     * @param bedTime 취침 시간
     * @param tasks 할일 목록
     * @return ChatGPT로 보낼 프롬프트
     */
    private String createPrompt(String wakeUpTime, String bedTime, String tasks) {
        StringBuilder prompt = new StringBuilder();

        // 기본 프롬프트 작성
        prompt.append("다음 정보를 기반으로 하루 스케줄을 작성해주세요:\n");
        prompt.append("- 기상 시간: ").append(wakeUpTime).append("\n");
        prompt.append("- 취침 시간: ").append(bedTime).append("\n");
        prompt.append("- 할일 목록: ").append(tasks).append("\n\n");

        // 요구사항 추가
        prompt.append("요구사항:\n");
        prompt.append("1. 동일한 할일은 중복되지 않게 배치해 주세요.\n");
        prompt.append("2. 할일 간 소요 시간을 정확히 반영해 주세요.\n");
        prompt.append("3. 남는 시간은 자유 시간이나 휴식 시간으로 채워 주세요.\n\n");
        prompt.append("스케줄은 효율적으로 배치되도록 생성해 주세요.");

        return prompt.toString();
    }
}
