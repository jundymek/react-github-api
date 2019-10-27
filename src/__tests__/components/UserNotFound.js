import React from "react";
import { render } from '@testing-library/react';
import MainHeader from "../../components/MainHeader";

xtest('should ', () => {
    const props = {
        isData: false,
        handleSearchBarDataChange: (x) => {},
        handleTechnologiesToSortChange: (x) => {},
        handleRepositoryDataLengthChange: (x) => {},
        isUserNotFound: true,
        setIsUserNotFound: (x) => {}
    }
    const {getByTestId} = render(<MainHeader {...props} />)
    expect(getByTestId("user-not-found-box")).toBeNull()
});
