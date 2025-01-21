// src/main/frontend/src/pages/MainPage.js
import React, { useState, useEffect } from "react";
import MyCalendar from "../components/MyCalendar";
import TimeTable from "../components/TimeTable";
import ToDoList from "../components/ToDoList";
import "./MainPage.css";

const MainPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [wakeTime, setWakeTime] = useState("07:00");
    const [sleepTime, setSleepTime] = useState("22:00");
    const [schedules, setSchedules] = useState([]);
    const [currentTime, setCurrentTime] = useState(new Date());

    const addSchedule = (schedule) => {
        setSchedules([...schedules, schedule]);
    };

    // 현재 시간 업데이트
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000); // 1초마다 업데이트
        return () => clearInterval(interval); // 컴포넌트 언마운트 시 클리어
    }, []);

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
                </div>
            </aside>
            <main className="content">
                <h2>Today {selectedDate.toLocaleDateString()}</h2>
                <h1>{currentTime.toLocaleTimeString()}</h1> {/* 현재 시간 표시 */}
                <TimeTable schedules={schedules} wakeTime={wakeTime} sleepTime={sleepTime} />
            </main>
            <aside className="todo-sidebar">
                <ToDoList addSchedule={addSchedule} />
            </aside>
        </div>
    );
};

export default MainPage;
