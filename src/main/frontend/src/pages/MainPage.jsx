// src/main/frontend/src/pages/MainPage.js
import React, { useState } from "react";
import MyCalendar from "../components/MyCalendar";
import TimeTable from "../components/TimeTable";
import ToDoList from "../components/ToDoList";
import "./MainPage.css";

const MainPage = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [wakeTime, setWakeTime] = useState("07:00");
    const [sleepTime, setSleepTime] = useState("22:00");

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
                <TimeTable wakeTime={wakeTime} sleepTime={sleepTime} />
            </main>
            <aside className="todo-sidebar">
                <ToDoList />
            </aside>
        </div>
    );
};

export default MainPage;
