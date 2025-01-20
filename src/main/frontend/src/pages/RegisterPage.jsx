import React from "react";
import MyCalendar from "../components/MyCalendar";
import TimeInput from "../components/TimeInput";
import ScheduleInput from "../components/ScheduleInput";

function MainPage() {
    return (
        <div className="main-page">
            <h1>Main Page</h1>
            <MyCalendar />
            <TimeInput />
            <ScheduleInput />
        </div>
    );
}

export default MainPage;
