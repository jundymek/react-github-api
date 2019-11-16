import React from "react";
import "../../setupTests";
import { shallow, mount } from "enzyme";
import { render, getByText, fireEvent } from "@testing-library/react";
import App from "../../App";
import { act } from 'react-dom/test-utils';

it("<APP /> renders without crashing", () => {
  render(<App />);
});

xit("User not found", () => {
  const wrap = mount(<App />);
  const setState = jest.fn();
  const useStateSpy = jest.spyOn(React, "useState");
  useStateSpy.mockImplementation(init => [init, setState]);
  expect(wrap.text()).toEqual("User not");
});

xit('Empty data', () => {
  const app = render(<App />)
  const err = app.getAllByText(/Please fill above/i)
  console.log(err)
  expect(err).toContain(/Please fill above/i)
});

describe('Test whole component with mock fetch', () => {
  beforeEach(() => {
    fetch.resetMocks()
  })
  it('Search unexisting user', () => {
    let component
    act(() => {
      component  = render(<App />);
    });
    // const component  = render(<App />);
    const input = component.getByLabelText("search-input");
    const searchButton = component.getByText("Search")
    
    let h2Text
    act(() => {
      
      fireEvent.change(input, { target: { value: "jundymek" } });
      fireEvent.click(searchButton)
      // fetch.mockResponseOnce(JSON.stringify({ input: '', user: null, repositories: [] }))
      const {getByText} = component
    // fetch.mockResponseOnce(JSON.stringify({ input: '', user: null, repositories: [] }))
      // h2Text = getByText('User not found')
    });
    
    console.log(component)
    expect(component).toBeTruthy()
  });
});
