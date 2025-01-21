// src/main/frontend/src/components/ToDoList.js
import React, { useState } from "react";

const ToDoList = ({ addSchedule }) => {
    const [taskName, setTaskName] = useState("");
    const [duration, setDuration] = useState("");
    const [tasks, setTasks] = useState([]);

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
        </div>
    );
};

export default ToDoList;
