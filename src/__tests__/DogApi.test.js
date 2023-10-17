import {render, screen, waitForElementToBeRemoved} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DogApi from '../testViews/DogApi';
import mockFetch from '../testViews/mockFetch';

// This is a test suite
beforeEach(() => {
   jest.spyOn(window, "fetch").mockImplementation(mockFetch);
})

afterEach(() => {
   jest.restoreAllMocks();
});

// run a single test npm test -- DogApi.test.js --verbose
// findBy queries are used when you need to test asynchronous code that is dependent on something
// being in the DOM after a period of time. Because the findBy query returns a promise that
// gets resolved when the requested element is found in the DOM,
// the await keyword is used within the expect method.

// Testing cheatsheet https://testing-library.com/docs/react-testing-library/cheatsheet/#queries
// getBy* (most commonly used)
// queryBy* (used when testing the absence of an element without throwing an error)
// findBy* (used when testing asynchronous code)

// jest.spyOn(window, "fetch"); creates a mock function
//  that will track calls to the fetch method attached to the global window variable in the DOM.
// .mockImplementation(mockFetch); accepts a function that will be used to implement the mock method.


test('renders the landing page', async () => {
   render(<DogApi />);

   expect(screen.getByRole("heading")).toHaveTextContent(/Doggy Directory/);
   expect(screen.getByRole("combobox")).toHaveDisplayValue("Select a breed");
   expect(await screen.findByRole("option", { name: "husky"})).toBeInTheDocument()
   expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
   expect(screen.getByRole("img")).toBeInTheDocument();
});

test("should be able to search and display dog image results", async () => {
   render(<DogApi />);

   //Simulate selecting an option and verifying its value
   const select = screen.getByRole("combobox");
   expect(await screen.findByRole("option", { name: "cattledog"})).toBeInTheDocument();
   userEvent.selectOptions(select, "cattledog");
   expect(select).toHaveValue("cattledog");

   //Initiate the search request
   const searchBtn = screen.getByRole("button", { name: "Search" });
   expect(searchBtn).not.toBeDisabled();
   userEvent.click(searchBtn);

   //Loading state displays and gets removed once results are displayed
   await waitForElementToBeRemoved(() => screen.queryByText(/Loading/i));

   //Verify image display and results count
   const dogImages = screen.getAllByRole("img");
   expect(dogImages).toHaveLength(2);
   expect(screen.getByText(/2 Results/i)).toBeInTheDocument();
   expect(dogImages[0]).toHaveAccessibleName("cattledog 1 of 2");
   expect(dogImages[1]).toHaveAccessibleName("cattledog 2 of 2");
})