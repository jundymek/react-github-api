import React from "react";
import { render, fireEvent } from "@testing-library/react";
import SearchBar from "../../components/SearchBar";
import * as utils from'../../components/helpers/handleFetchData'

const setup = () => {
  const component = render(<SearchBar />);
  const input = component.getByLabelText("search-input");
  const searchButton = component.getByText("Search")
  const testFetch = jest.spyOn(utils, 'handleFetchData')
  return {
    input,
    searchButton,
    testFetch,
    ...component
  };
};

describe('<SearchBar />', () => {
  it("Test handleFethData input value", async () => {
    const { input, searchButton, testFetch } = setup();
    fireEvent.change(input, { target: { value: "jundymek" } });
    fireEvent.click(searchButton)
    expect(testFetch).toHaveBeenCalledTimes(1)
    expect(testFetch).toHaveBeenCalledWith("jundymek")
  });
});

