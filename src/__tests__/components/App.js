import React from "react";
import "../../setupTests";
import { shallow, mount } from "enzyme";
import { render, getByText } from "@testing-library/react";
import App from "../../App";

xit("<APP /> renders without crashing", () => {
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
