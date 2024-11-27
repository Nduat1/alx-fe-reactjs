import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../TodoList";

describe("TodoList Component", () => {
    test("renders initial todos correctly", () => {
        render(<TodoList />);
        // Check if initial todos are displayed
        expect(screen.getByText("Learn React")).toBeInTheDocument();
        expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    });

    test("allows adding a new todo", () => {
        render(<TodoList />);
        const input = screen.getByPlaceholderText("Add a new task");
        const button = screen.getByText("Add");

        // Simulate adding a new todo
        fireEvent.change(input, { target: { value: "Test new todo" } });
        fireEvent.click(button);

        // Check if the new todo is displayed
        expect(screen.getByText("Test new todo")).toBeInTheDocument();
    });

    test("allows toggling a todo", () => {
        render(<TodoList />);
        const todoItem = screen.getByText("Learn React");

        // Simulate toggling the todo
        fireEvent.click(todoItem);

        // Check if the todo has line-through style (indicating completion)
        expect(todoItem).toHaveStyle("text-decoration: line-through");
    });

    test("allows deleting a todo", () => {
        render(<TodoList />);
        const todoItem = screen.getByText("Learn React");
        const deleteButton = screen.getByText("Delete", { selector: "button" });

        // Simulate deleting the todo
        fireEvent.click(deleteButton);

        // Check if the todo is removed from the DOM
        expect(todoItem).not.toBeInTheDocument();
    });

    test("prevents adding empty todos", () => {
        render(<TodoList />);
        const button = screen.getByText("Add");

        // Simulate adding an empty todo
        fireEvent.click(button);

        // Check that no additional todo is added
        expect(screen.queryByText("")).not.toBeInTheDocument();
    });
});
