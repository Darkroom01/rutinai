package web.rutina.Model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Schedule {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String username; // 사용자 아이디
    @Lob
    private String generatedSchedule; // ChatGPT로 생성된 스케줄
}
