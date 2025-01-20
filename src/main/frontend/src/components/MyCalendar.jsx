import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function MyCalendar() {
    const [value, setValue] = useState(new Date());

    const handleChange = (date) => {
        setValue(date);
    };

    return (
        <div className="calendar-container">
            <h2>날짜 선택</h2>
            <Calendar onChange={handleChange} value={value} />
            <p>선택된 날짜: {value.toDateString()}</p>
        </div>
    );
}

export default MyCalendar;
