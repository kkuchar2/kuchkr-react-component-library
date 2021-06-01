import React from "react";
import { render } from "@testing-library/react";

import Input from "./Input";
import { InputProps } from "./Input.types";

describe("Test Component", () => {
  let props: InputProps;

  beforeEach(() => {
    props = {
      value: "bar"
    };
  });

  const renderComponent = () => render(<Input {...props} />);

  it("should render foo text correctly", () => {

    const { getByTestId } = renderComponent();

    const component = getByTestId("Input");

    expect(component).toHaveTextContent("harvey was here");
  });
});
