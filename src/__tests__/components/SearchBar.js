import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../../components/SearchBar";
import * as utils from'../../components/helpers/handleFetchData'
import * as userUtils from'../../components/helpers/handleFetchUserData'
import * as fetchUtils  from '../../components/helpers/chainedFetch'

const setup = () => {
  const component = render(<SearchBar />);
  const input = component.getByLabelText("search-input");
  const searchButton = component.getByText("Search")
  const testFetch = jest.spyOn(utils, 'handleFetchData')
  const testUserFetch = jest.spyOn(userUtils, 'handleFetchUserData')
  const chainedFetch = jest.spyOn(fetchUtils, 'chainedFetch')
  return {
    input,
    searchButton,
    testFetch,
    testUserFetch,
    chainedFetch,
    ...component
  };
};

// afterEach(() => {
//   jest.clearAllMocks();
// });

describe('<SearchBar />', () => {
  it("Test handleFetchData input value", async () => {
    const { input, searchButton, testFetch, testUserFetch, chainedFetch } = setup();
    fireEvent.change(input, { target: { value: "jundymek" } });
    fireEvent.click(searchButton)
    beforeEach(() => {
      chainedFetch("jundymek");
    });
    // expect(chainedFetch).toHaveBeenCalledTimes(1)
    expect(testUserFetch).toHaveBeenCalledTimes(1)
    // expect(testUserFetch).toHaveBeenCalledWith("jundymek")
    // expect(testFetch).toHaveBeenCalledTimes(1)
    // expect(testFetch).toHaveBeenCalledWith("jundymek")
  });
  xit('Test handleFetchUserData input value', async () => {
    const { input, searchButton, testUserFetch } = setup();
    fireEvent.change(input, { target: { value: "jundymek" } });
    fireEvent.click(searchButton)
    expect(testUserFetch).toHaveBeenCalledTimes(1)
    expect(testUserFetch).toHaveBeenCalledWith("jundymek")
  })
  xit('Test async handleFetchUserData input value', async () => {
    const { input, searchButton, testUserFetch } = setup();
    fireEvent.change(input, { target: { value: "jundymek" } });
    fireEvent.click(searchButton)
    expect(testUserFetch).toHaveBeenCalledTimes(1)
    expect(testUserFetch).toHaveBeenCalledWith("jundymek")
  })
});

