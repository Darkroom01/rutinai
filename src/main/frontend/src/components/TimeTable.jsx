// src/main/frontend/src/components/TimeTable.js
import React from "react";

const TimeTable = ({ schedules, wakeTime, sleepTime }) => {
    const formatTime = (hour, minute) =>
        `${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;

    const calculateTimeTable = () => {
        const wakeHour = parseInt(wakeTime.split(":")[0], 10);
        const wakeMinute = parseInt(wakeTime.split(":")[1], 10);
        const sleepHour = parseInt(sleepTime.split(":")[0], 10);
        const sleepMinute = parseInt(sleepTime.split(":")[1], 10);

        const timetable = [];
        let currentHour = wakeHour;
        let currentMinute = wakeMinute;

        for (const { name, duration } of schedules) {
            if (
                currentHour < sleepHour ||
                (currentHour === sleepHour && currentMinute < sleepMinute)
            ) {
                timetable.push(
                    `${formatTime(currentHour, currentMinute)} - ${name} (${duration}h)`
                );
                currentHour += duration;
                if (currentHour >= sleepHour) break;
            }
        }

        return timetable;
    };

    const timeTable = calculateTimeTable();

    return (
        <div>
            <h3>Time Table</h3>
            <ul>
                {timeTable.map((entry, index) => (
                    <li key={index}>{entry}</li>
                ))}
            </ul>
        </div>
    );
};

export default TimeTable;
