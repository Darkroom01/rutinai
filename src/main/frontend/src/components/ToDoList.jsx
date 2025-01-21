// src/main/frontend/src/components/ToDoList.js
import React, { useState } from "react";
import "./ToDoList.css";

const ToDoList = ({ addSchedule }) => {
    const [taskName, setTaskName] = useState("");
    const [duration, setDuration] = useState("");
    const [tasks, setTasks] = useState([]);
    const [feedback, setFeedback] = useState("");
    const [submittedFeedback, setSubmittedFeedback] = useState("");

    const handleAdd = () => {
        if (taskName.trim() !== "" && duration > 0) {
            const newTask = { name: taskName, duration: parseInt(duration, 10), checked: false };
            setTasks([...tasks, newTask]); // ToDoList 내부에도 추가
            addSchedule(newTask); // 상위 컴포넌트로 전달
            setTaskName("");
            setDuration("");
        }
    };

    const toggleTask = (index) => {
        const updatedTasks = tasks.map((task, i) =>
            i === index ? { ...task, checked: !task.checked } : task
        );
        setTasks(updatedTasks);
    };

    const handleFeedbackSubmit = () => {
        setSubmittedFeedback(feedback);
        setFeedback("");
    };

    const completionRate = tasks.length === 0
        ? 0
        : ((tasks.filter((task) => task.checked).length / tasks.length) * 100).toFixed(2);


    return (
        <div>
            <h3>To Do List</h3>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <label>
                            <input
                                type="checkbox"
                                checked={task.checked}
                                onChange={() => toggleTask(index)}
                            />
                            {task.name} ({task.duration}h)
                        </label>
                    </li>
                ))}
            </ul>
            <div className="completion-rate">
                <strong>Completion Rate:</strong> {completionRate}%
            </div>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task Name"
            />
            <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="Duration (hours)"
                min="1"
            />
            <button onClick={handleAdd}>Add Task</button>

            {/* 피드백 영역 */}
            <div className="feedback-section">
                <h4>Today's Feedback</h4>
                {submittedFeedback && (
                    <div className="submitted-feedback">
                        <strong>Your Feedback:</strong> {submittedFeedback}
                    </div>
                )}
                <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Share your thoughts about today..."
                />
                <button onClick={handleFeedbackSubmit}>Submit Feedback</button>
            </div>
        </div>


    );
};

export default ToDoList;
