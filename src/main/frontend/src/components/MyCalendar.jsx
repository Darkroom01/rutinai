// src/main/frontend/src/components/MyCalendar.js
import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // 기본 스타일 적용

const MyCalendar = ({ selectedDate, setSelectedDate }) => {
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div>
            <h3>Calendar</h3>
            <Calendar
                value={selectedDate}
                onChange={handleDateChange}
            />
        </div>
    );
};

export default MyCalendar;
