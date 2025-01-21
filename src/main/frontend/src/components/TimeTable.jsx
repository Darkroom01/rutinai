// src/main/frontend/src/components/TimeTable.js
import React, { useState } from "react";

const TimeTable = ({ wakeTime, sleepTime }) => {
    const [timeTable, setTimeTable] = useState([]);

    React.useEffect(() => {
        const generateTimeTable = () => {
            const wakeHour = parseInt(wakeTime.split(":")[0], 10);
            const wakeMinute = parseInt(wakeTime.split(":")[1], 10);
            const sleepHour = parseInt(sleepTime.split(":")[0], 10);
            const sleepMinute = parseInt(sleepTime.split(":")[1], 10);

            const times = [];
            let currentHour = wakeHour;
            let currentMinute = wakeMinute;

            while (
                currentHour < sleepHour ||
                (currentHour === sleepHour && currentMinute < sleepMinute)
                ) {
                times.push(
                    `${String(currentHour).padStart(2, "0")}:${String(
                        currentMinute
                    ).padStart(2, "0")}`
                );
                currentHour += currentMinute + 60 >= 60 ? 1 : 0;
                currentMinute = (currentMinute + 60) % 60;
            }

            setTimeTable(times);
        };

        generateTimeTable();
    }, [wakeTime, sleepTime]);

    return (
        <div>
            <h3>Time Table</h3>
            <ul>
                {timeTable.map((time, index) => (
                    <li key={index}>{time}</li>
                ))}
            </ul>
        </div>
    );
};

export default TimeTable;
