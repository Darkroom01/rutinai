package web.rutina.Model;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class ScheduleRequest {
    private String wakeUpTime;
    private String bedTime;
    private String tasks;     // 할일 목록 (하나의 문자열)
}
