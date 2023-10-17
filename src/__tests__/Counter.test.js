
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from '../testViews/Counter';
import { BrowserRouter } from "react-router-dom"

// beforeEach
// afterReach
// afterAll

// Title
test('header renders with correct text', () => {
    render(<Counter />, { wrapper: BrowserRouter });
    const headerEl = screen.getByTestId("title");
    expect(headerEl.textContent).toBe("Counter in TDD test");
});

// Counter
test("Counter initially starts with a text of 0", () => {
    render(<Counter />, { wrapper: BrowserRouter });
    const counterEl = screen.getByTestId("counter");
    expect(counterEl.textContent).toBe("0");
})

// Input
test("Input initially starts with a value of 1", () => {
    render(<Counter />, { wrapper: BrowserRouter });
    const inputEl = screen.getByTestId("input");
    expect(inputEl.value).toBe("1");
})

// Increment button
test("Add Button renders with +", () => {
    render(<Counter />, { wrapper: BrowserRouter });
    const addBtn = screen.getByTestId("add-btn");
    expect(addBtn.textContent).toBe("+");
})

// Increment button
test("Subtract Button renders with -", () => {
    render(<Counter />, { wrapper: BrowserRouter });
    const subtractBtn = screen.getByTestId("subtract-btn");
    expect(subtractBtn.textContent).toBe("-");
})

test("Value changes correctly", () => {
    render(<Counter />, { wrapper: BrowserRouter });
    const inputEl = screen.getByTestId("input");

    expect(inputEl.value).toBe("1")

    fireEvent.change(inputEl, {
        target: {
            value:"5"
        }
    })

    expect(inputEl.value).toBe("5")
})

test("Click on + button increments correctly", () => {
    render(<Counter />, { wrapper: BrowserRouter });
    const addbtnEl = screen.getByTestId("add-btn");
    const counterEl = screen.getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(addbtnEl)

    expect(counterEl.textContent).toBe("1")
})

test("Click on - button decrements correctly", () => {
    render(<Counter />, { wrapper: BrowserRouter });
    const subtractbtnEl = screen.getByTestId("subtract-btn");
    const counterEl = screen.getByTestId("counter");

    expect(counterEl.textContent).toBe("0");
    fireEvent.click(subtractbtnEl)

    expect(counterEl.textContent).toBe("-1")
})

test("Changin input value then clicking on + button works correctly", () => {
    render(<Counter />, { wrapper: BrowserRouter });
    const addbtnEl = screen.getByTestId("add-btn");
    const counterEl = screen.getByTestId("counter");
    const inputEl = screen.getByTestId("input");


    fireEvent.change(inputEl, {
        target: {
            value:"5"
        }
    })

    fireEvent.click(addbtnEl)

    expect(counterEl.textContent).toBe("5")
})