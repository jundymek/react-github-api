import React from "react";
import { render } from "@testing-library/react";
import RepositoryUserBox from "../../components/RepositoryUserBox"


const testData = {
    "input": "jundymek",
    "user": {
      "login": "jundymek",
    },
    "repositories": []
  }

describe('<RepositoryUserBox test', () => {
    it('With proper user', () => {
        const { getByText } = render(<RepositoryUserBox data={testData} />)
        const h2Text = getByText('Repositories of jundymek')
        expect(h2Text).toBeTruthy()
    });
});
