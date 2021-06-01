import React from "react";
import { render } from "@testing-library/react";

import Text from "./Text";
import { TextProps } from "./Text.types";

describe("Test Component", () => {
  let props: TextProps;

  beforeEach(() => {
    props = {
      text : 'dummy',
      className: '',
      children: [],
      disabled: false
    };
  });

  const renderComponent = () => render(<Text {...props} />);

  it("should render foo text correctly", () => {
    props.text = "harvey was here";
    const { getByTestId } = renderComponent();

    const component = getByTestId("Text");

    expect(component).toHaveTextContent("harvey was here");
  });
});
