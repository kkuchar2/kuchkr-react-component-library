import React from "react";
import { render } from "@testing-library/react";
import { SelectProps } from "./Select.types";
import Select from "./Select";

describe("Test Component", () => {
  let props: SelectProps;

  const renderComponent = () => render(<Select {...props} />);

  it("should render foo text correctly", () => {

    const { getByTestId } = renderComponent();

    const component = getByTestId("Select");

    // Implement component test here
  });
});
