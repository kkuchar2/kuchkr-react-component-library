import React from "react";
import { render } from "@testing-library/react";
import Slider from "./Slider";
import { SliderProps } from "./Slider.types";

describe("Test Component", () => {
  let props: SliderProps;

  const renderComponent = () => render(<Slider {...props} />);

  it("should render foo text correctly", () => {
   
    const { getByTestId } = renderComponent();

    const component = getByTestId("Slider");

    // Implement component test here
  });
});
