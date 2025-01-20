import React, { useState } from "react";

function TimeInput() {
    const [wakeUpTime, setWakeUpTime] = useState("06:00");
    const [sleepTime, setSleepTime] = useState("22:00");
    const [timeBlocks, setTimeBlocks] = useState([]);

    const handleWakeUpChange = (e) => setWakeUpTime(e.target.value);
    const handleSleepChange = (e) => setSleepTime(e.target.value);

    // 시간 블록 생성 함수
    const generateTimeBlocks = () => {
        const wakeUpHour = parseInt(wakeUpTime.split(":")[0], 10);
        const sleepHour = parseInt(sleepTime.split(":")[0], 10);
        const blocks = [];

        // 기상 시간부터 취침 시간까지 1시간 단위 블럭 생성
        for (let i = wakeUpHour; i <= sleepHour; i++) {
            const blockTime = `${i < 10 ? "0" : ""}${i}:00`; // 1시간 단위 형식
            blocks.push(blockTime);
        }

        setTimeBlocks(blocks);
    };

    return (
        <div>
            <label>
                기상 시간:
                <input
                    type="time"
                    value={wakeUpTime}
                    onChange={handleWakeUpChange}
                />
            </label>
            <br />
            <label>
                취침 시간:
                <input
                    type="time"
                    value={sleepTime}
                    onChange={handleSleepChange}
                />
            </label>
            <br />
            <button onClick={generateTimeBlocks}>시간 블럭 생성</button>

            <div>
                <h3>시간 블럭</h3>
                <table>
                    <thead>
                    <tr>
                        <th>시간</th>
                    </tr>
                    </thead>
                    <tbody>
                    {timeBlocks.map((block, index) => (
                        <tr key={index}>
                            <td>{block}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TimeInput;
