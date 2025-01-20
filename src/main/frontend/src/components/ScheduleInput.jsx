import React, { useState } from "react";

function ScheduleInput() {
    const [category, setCategory] = useState(""); // 카테고리
    const [title, setTitle] = useState(""); // 일정 제목
    const [scheduleType, setScheduleType] = useState(""); // 반복 스케줄
    const [days, setDays] = useState([]); // 선택된 요일들
    const [startDate, setStartDate] = useState(""); // 시작 날짜
    const [endDate, setEndDate] = useState(""); // 종료 날짜
    const [specialEvent, setSpecialEvent] = useState(""); // 스페셜 이벤트
    const [startTime, setStartTime] = useState(""); // 시작 시간
    const [endTime, setEndTime] = useState(""); // 종료 시간
    const [duration, setDuration] = useState(""); // 소요 시간

    const [todoList, setTodoList] = useState([]); // 저장된 일정 목록
    const [checkedItems, setCheckedItems] = useState([]); // 체크된 항목

    // 카테고리 변경 처리
    const handleCategoryChange = (e) => setCategory(e.target.value);

    // 반복 스케줄 처리
    const handleScheduleChange = (e) => setScheduleType(e.target.value);

    // 요일 선택 처리
    const handleDayChange = (e) => {
        const { value, checked } = e.target;
        setDays(prevDays =>
            checked ? [...prevDays, value] : prevDays.filter(day => day !== value)
        );
    };

    // 시작 시간 및 종료 시간 변경 처리
    const handleStartTimeChange = (e) => setStartTime(e.target.value);
    const handleEndTimeChange = (e) => setEndTime(e.target.value);
    const handleDurationChange = (e) => setDuration(e.target.value);

    // 시작 날짜 및 종료 날짜 변경 처리
    const handleStartDateChange = (e) => setStartDate(e.target.value);
    const handleEndDateChange = (e) => setEndDate(e.target.value);

    // 폼 제출 처리
    const handleSubmit = (e) => {
        e.preventDefault();

        // 새로운 일정 추가
        const newTodo = {
            title,
            category,
            scheduleType,
            days,
            startDate,
            endDate,
            specialEvent,
            startTime,
            endTime,
            duration
        };

        setTodoList([...todoList, newTodo]);

        // 입력된 값 초기화
        setTitle("");
        setCategory("");
        setScheduleType("");
        setDays([]);
        setStartDate("");
        setEndDate("");
        setSpecialEvent("");
        setStartTime("");
        setEndTime("");
        setDuration("");
    };

    // 체크박스 상태 변경 처리
    const handleCheckboxChange = (index) => {
        setCheckedItems(prevCheckedItems => {
            const newCheckedItems = [...prevCheckedItems];
            newCheckedItems[index] = !newCheckedItems[index];
            return newCheckedItems;
        });
    };

    return (
        <div>
            <h2>일정 추가</h2>
            <form onSubmit={handleSubmit}>
                {/* 일정 제목 */}
                <label>
                    일정 제목:
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <br />

                {/* 카테고리 선택 */}
                <label>
                    카테고리:
                    <select onChange={handleCategoryChange} value={category}>
                        <option value="">선택하세요</option>
                        <option value="fixed">고정 스케줄</option>
                        <option value="recurring">반복 스케줄</option>
                        <option value="special">스페셜 스케줄</option>
                    </select>
                </label>
                <br />

                {/* 반복 스케줄 */}
                {category === "recurring" && (
                    <div>
                        <label>
                            반복 스케줄:
                            <select onChange={handleScheduleChange} value={scheduleType}>
                                <option value="">선택하세요</option>
                                <option value="weekly">매주</option>
                                <option value="monthly">매월</option>
                                <option value="yearly">매년</option>
                            </select>
                        </label>
                        <br />
                        {scheduleType === "weekly" && (
                            <div>
                                <label>요일:</label>
                                {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
                                    <label key={day}>
                                        <input
                                            type="checkbox"
                                            value={day}
                                            onChange={handleDayChange}
                                        />
                                        {day}
                                    </label>
                                ))}
                            </div>
                        )}
                        <br />
                        <label>
                            시작 날짜:
                            <input
                                type="date"
                                value={startDate}
                                onChange={handleStartDateChange}
                            />
                        </label>
                        <br />
                        <label>
                            종료 날짜:
                            <input
                                type="date"
                                value={endDate}
                                onChange={handleEndDateChange}
                            />
                        </label>
                    </div>
                )}

                {/* 고정 스케줄 */}
                {category === "fixed" && (
                    <div>
                        <label>
                            시작 시간:
                            <input
                                type="time"
                                value={startTime}
                                onChange={handleStartTimeChange}
                            />
                        </label>
                        <br />
                        <label>
                            종료 시간:
                            <input
                                type="time"
                                value={endTime}
                                onChange={handleEndTimeChange}
                            />
                        </label>
                    </div>
                )}

                {/* 스페셜 스케줄 */}
                {category === "special" && (
                    <div>
                        <label>
                            스페셜 이벤트:
                            <input
                                type="text"
                                value={specialEvent}
                                onChange={(e) => setSpecialEvent(e.target.value)}
                            />
                        </label>
                        <br />
                        <label>
                            소요 시간 (분):
                            <input
                                type="number"
                                value={duration}
                                onChange={handleDurationChange}
                            />
                        </label>
                    </div>
                )}

                <button type="submit">저장</button>
            </form>

            <h2>일정 목록</h2>
            <ul>
                {todoList.map((todo, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="checkbox"
                                checked={checkedItems[index] || false}
                                onChange={() => handleCheckboxChange(index)}
                            />
                            {todo.title}
                        </label>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ScheduleInput;
