package web.rutina.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import web.rutina.Model.Schedule;

import java.util.List;

public interface ScheduleRepository extends JpaRepository<Schedule, Long> {
    List<Schedule> findByUsername(String username);
}
