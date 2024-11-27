import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
    test("renders initial todos correctly", () => {
        render(<TodoList />);
        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    });

    test("adds a new todo", () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText("Add a new task");
        const button = screen.getByText("Add");

        fireEvent.change(input, { target: { value: "New Todo" } });
        fireEvent.click(button);

        expect(screen.getByText("New Todo")).toBeInTheDocument();
    });

    test("toggles a todo's completion status", () => {
        render(<TodoList />);
        const todo = screen.getByText("Learn React");
        expect(todo).not.toHaveStyle("text-decoration: line-through");

        fireEvent.click(todo);
        expect(todo).toHaveStyle("text-decoration: line-through");

        fireEvent.click(todo);
        expect(todo).not.toHaveStyle("text-decoration: line-through");
    });

    test("deletes a todo", () => {
        render(<TodoList />);
        const todo = screen.getByText("Learn React");
        const deleteButton = todo.nextSibling; // Access the Delete button

        fireEvent.click(deleteButton);
        expect(todo).not.toBeInTheDocument();
    });
});
