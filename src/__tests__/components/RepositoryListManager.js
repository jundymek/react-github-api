import React from "react";
import { render } from "@testing-library/react";
import RepositoryListManager from "../../components/RepositoryListManager";

const data = []

xit('<RepositoryListManager render withou crashing', () => {
    render(<RepositoryListManager data={data} />)
});
