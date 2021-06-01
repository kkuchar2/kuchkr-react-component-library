import React from "react";
import { render } from "@testing-library/react";
import Switch from "./Switch";
import { SwitchProps } from "./Switch.types";

describe("Test Component", () => {
  let props: SwitchProps;

  const renderComponent = () => render(<Switch {...props} />);

  it("should render foo text correctly", () => {
   
    const { getByTestId } = renderComponent();

    const component = getByTestId("Switch");

    // Implement component test here
  });
});
