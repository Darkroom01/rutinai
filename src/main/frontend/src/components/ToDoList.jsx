// src/main/frontend/src/components/ToDoList.js
import React, { useState } from "react";

const ToDoList = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState("");

    const addTodo = () => {
        if (newTodo.trim() !== "") {
            setTodos([...todos, newTodo]);
            setNewTodo("");
        }
    };

    const removeTodo = (index) => {
        const updatedTodos = todos.filter((_, i) => i !== index);
        setTodos(updatedTodos);
    };

    return (
        <div>
            <h3>To Do List</h3>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}{" "}
                        <button onClick={() => removeTodo(index)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTodo}>Add</button>
        </div>
    );
};

export default ToDoList;
