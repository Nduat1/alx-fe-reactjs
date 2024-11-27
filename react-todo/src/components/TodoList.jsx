import React, { useState } from "react";

const TodoList = () => {
    // State to manage todos
    const [todos, setTodos] = useState([
        { id: 1, text: "Learn React", completed: false },
        { id: 2, text: "Build a Todo App", completed: false },
    ]);

    // State for the new todo input
    const [newTodo, setNewTodo] = useState("");

    // Method to add a new todo
    const addTodo = (e) => {
        e.preventDefault();
        if (newTodo.trim() === "") return;

        const newTodoItem = {
            id: Date.now(), // Generate a unique ID
            text: newTodo.trim(),
            completed: false,
        };
        setTodos([...todos, newTodoItem]);
        setNewTodo(""); // Reset input field
    };

    // Method to toggle the completion status of a todo
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        );
    };

    // Method to delete a todo
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div>
            <h1>Todo List</h1>
            {/* Add Todo Form */}
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button type="submit">Add</button>
            </form>
            {/* Displaying the list of todos */}
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{
                            textDecoration: todo.completed
                                ? "line-through"
                                : "none",
                            cursor: "pointer",
                        }}
                    >
                        {todo.text}
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent click event bubbling
                                deleteTodo(todo.id);
                            }}
                            style={{
                                marginLeft: "10px",
                                color: "red",
                                cursor: "pointer",
                            }}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
