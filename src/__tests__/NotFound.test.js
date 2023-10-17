// whether the fruit list includes 3 items,
// whether the h1 tag exists,
// whether the span tag contains the sum of variables a and b.
import {render, screen} from '@testing-library/react';
import NotFoundTest from '../testViews/NotFoundTest';
import {BrowserRouter } from "react-router-dom"
test('should render 3 list items', () => {
    render(<BrowserRouter><NotFoundTest /></BrowserRouter>);
    // screen object represents the entire HTML document in the rendered component.
    const listitems = screen.getAllByRole("listitem");
    // const input = screen.getByLabelText('Username')
    expect(listitems).toHaveLength(3); //compare the result using Jest
    // The expect function is used every time you want to verify a certain outcome, and it accepts a single argument representing the value that your code produces.
    // expect gives you access to a number of "matchers" that let you validate different things

  });

test('title should be rendered', () => {
  render(<NotFoundTest />, {wrapper: BrowserRouter});
  const title = screen.getByTestId("title");
  expect(title).toBeInTheDocument();

  // .toHaveTextContent is the matcher for the expect function in the first line,
  // while getByRole("heading") is the selector to grab the DOM element.
  // expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
  // expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
  // expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
  // expect(screen.getByRole("img")).toBeInTheDocument();
});

test('sum should be 17', () => {
  render(<NotFoundTest />, {wrapper: BrowserRouter});
  const sum = screen.getByTitle("sum");
  expect(sum).toHaveTextContent("17");
  expect(sum.textContent).toBe("17");
});

// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
