import { render, waitFor, screen } from "@testing-library/react";
import Todos from "../testViews/Todos";
import axios from "axios";

jest.mock("axios");

const dummyTodos = [
    {
        userId: 1,
        id: 1,
        title: "todo 1",
        completed: false,
    },
    {
        userId: 1,
        id: 2,
        title: "todo 2",
        completed: false,
    },
    {
        userId: 1,
        id: 3,
        title: "todo 3",
        completed: false,
    },
];

// Test block
// First argument is a string representing the name of the test case
// 2nd argument is a function that holds the expectations of the test
test("todos list", async () => {
    axios.get.mockResolvedValue({ data: dummyTodos });
    render(<Todos />); // Test if the page renders accurately before any API calls or selections are made

    // getBy* (most commonly used)
    // queryBy* (used when testing the absence of an element without throwing an error)
    // findBy* (used when testing asynchronous code)
    const todoList = await waitFor(() => screen.findAllByTestId("todo"));

    expect(todoList).toHaveLength(3);
});