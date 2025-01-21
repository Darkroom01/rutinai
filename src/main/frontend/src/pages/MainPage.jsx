import React, { useState, useEffect } from "react";
import MyCalendar from "../components/MyCalendar";
import TimeTable from "../components/TimeTable";
import ToDoList from "../components/ToDoList";
import axios from "axios";
import "./MainPage.css";

const MainPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [wakeTime, setWakeTime] = useState("07:00");
    const [sleepTime, setSleepTime] = useState("22:00");
    const [scheduleText, setScheduleText] = useState(""); // 전체 텍스트로 저장
    const [scheduleList, setScheduleList] = useState([]); // 리스트로 저장
    const [currentTime, setCurrentTime] = useState(new Date());

    const addSchedule = (schedule) => {
        setScheduleText(scheduleText + schedule.name + "\n");
    };

    // 현재 시간 업데이트
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    // 스케줄 생성 API 호출
    const fetchGeneratedSchedule = async () => {
        try {
            const tasks = scheduleText;
            const response = await axios.get(
                `http://localhost:8080/api/schedule/generate/${encodeURIComponent(wakeTime)}/${encodeURIComponent(sleepTime)}/${encodeURIComponent(tasks)}`
            );

            const rawText = response.data.trim();
            setScheduleText(rawText); // 전체 텍스트 저장

            // 텍스트를 줄 단위로 분리하여 리스트에 저장
            const parsedList = rawText.split("\n").map((line) => {
                const [time, ...taskParts] = line.split(" - ");
                return { time: time.trim(), task: taskParts.join(" - ").trim() };
            });
            setScheduleList(parsedList);
        } catch (error) {
            console.error("스케줄 생성 중 오류 발생:", error);
        }
    };

    return (
        <div className="main-container">
            <aside className="sidebar">
                <MyCalendar selectedDate={selectedDate} setSelectedDate={setSelectedDate} />
                <div className="time-inputs">
                    <h3>Day To Night</h3>
                    <label>
                        Wake Time:
                        <input
                            type="time"
                            value={wakeTime}
                            onChange={(e) => setWakeTime(e.target.value)}
                        />
                    </label>
                    <label>
                        Sleep Time:
                        <input
                            type="time"
                            value={sleepTime}
                            onChange={(e) => setSleepTime(e.target.value)}
                        />
                    </label>
                    <button onClick={fetchGeneratedSchedule} className="generate-button">
                        Generate Schedule
                    </button>
                </div>
            </aside>
            <main className="content">
                <h2>Today {selectedDate.toLocaleDateString()}</h2>
                <h1>{currentTime.toLocaleTimeString()}</h1> {/* 현재 시간 표시 */}

                <div className="schedule-output">
                    <h3>Your Schedule</h3>
                    {scheduleList.map((item, index) => (
                        <div key={index} className="schedule-card">
                            <span className="task-time">{item.time}</span>
                            <span className="task-name">{item.task}</span>
                        </div>
                    ))}
                </div>
            </main>
            <aside className="todo-sidebar">
                <ToDoList addSchedule={addSchedule} />
            </aside>
        </div>
    );
};

export default MainPage;
