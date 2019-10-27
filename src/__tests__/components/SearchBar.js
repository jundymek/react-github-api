import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../../components/SearchBar";
import * as utils from'../../components/helpers/handleFetchData'
import * as userUtils from'../../components/helpers/handleFetchUserData'

const setup = () => {
  const component = render(<SearchBar />);
  const input = component.getByLabelText("search-input");
  const searchButton = component.getByText("Search")
  const testFetch = jest.spyOn(utils, 'handleFetchData')
  const testUserFetch = jest.spyOn(userUtils, 'handleFetchUserData')
  return {
    input,
    searchButton,
    testFetch,
    testUserFetch,
    ...component
  };
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('<SearchBar />', () => {
  it("Test handleFetchData input value", async () => {
    const { input, searchButton, testFetch } = setup();
    fireEvent.change(input, { target: { value: "jundymek" } });
    fireEvent.click(searchButton)
    expect(testFetch).toHaveBeenCalledTimes(1)
    expect(testFetch).toHaveBeenCalledWith("jundymek")
    
  });
  it('Test handleFetchUserData input value', async () => {
    const { input, searchButton, testUserFetch } = setup();
    fireEvent.change(input, { target: { value: "jundymek" } });
    fireEvent.click(searchButton)
    expect(testUserFetch).toHaveBeenCalledTimes(1)
    expect(testUserFetch).toHaveBeenCalledWith("jundymek")
  });
});

