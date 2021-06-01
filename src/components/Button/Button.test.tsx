import React from "react";
import {render} from "@testing-library/react";

import Button from "./Button";
import {ButtonProps} from "./Button.types";

describe("Button", () => {

    let props: ButtonProps;

    const renderComponent = () => render(<Button {...props} />);

    it("should render foo text correctly", () => {
        const testText = "new button text";
        props.text = testText;
        const {getByTestId} = renderComponent();
        const component = getByTestId("Button");
        expect(component).toHaveTextContent(testText);
    });
});
