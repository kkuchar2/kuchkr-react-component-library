import React from "react";
import { render } from "@testing-library/react";
import Spinner from "./Spinner";
import { SpinnerProps } from "./Spinner.types";

describe("Test Component", () => {
  let props: SpinnerProps;

  const renderComponent = () => render(<Spinner {...props} />);

  it("should render foo text correctly", () => {
   
    const { getByTestId } = renderComponent();

    const component = getByTestId("Spinner");

    // Implement component test here
  });
});
