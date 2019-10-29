import React from "react";
import { render, getByText } from "@testing-library/react";
import RepositoryListManager from "../../components/RepositoryListManager";

const data = []
const user = {
    "login": "jundymekhh",
  }

xit('<RepositoryListManager render withou crashing', () => {
    const container = render(<RepositoryListManager data={data} user={user}/>)
    // const test = getByText(container, "jundymek")
    expect(container.getByText(/jundymeeek/i))
});
