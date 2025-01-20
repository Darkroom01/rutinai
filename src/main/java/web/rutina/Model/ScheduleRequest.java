package web.rutina.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.scheduling.config.Task;

import java.time.LocalTime;
import java.util.List;

@Getter
@Setter
public class ScheduleRequest {
    private LocalTime wakeUpTime; // 기상 시간
    private LocalTime bedTime; // 취침 시간
    private String fixedTimes; // 고정 시간
    private String tasks; // 할일 목록
}
