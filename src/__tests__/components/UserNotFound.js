import React from "react";
import { render } from '@testing-library/react';
import MainHeader from "../../components/MainHeader";

xtest('should ', () => {
    const props = {
        isData: false,
        dataChange: (x) => {},
        handleTechnologiesToSortChange: (x) => {},
        handledataLengthChange: (x) => {},
        isUserNotFound: true,
        setIsUserNotFound: (x) => {}
    }
    const {getByTestId} = render(<MainHeader {...props} />)
    expect(getByTestId("user-not-found-box")).toBeNull()
});
