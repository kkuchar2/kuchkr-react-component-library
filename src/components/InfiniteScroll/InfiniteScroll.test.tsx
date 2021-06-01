import React from "react";
import { render } from "@testing-library/react";
import InfiniteScroll from "./InfiniteScroll";
import { InfiniteScrollProps } from "./InfiniteScroll.types";

describe("Test Component", () => {
  let props: InfiniteScrollProps;

  const renderComponent = () => render(<InfiniteScroll {...props} />);

  it("should render foo text correctly", () => {
   
    const { getByTestId } = renderComponent();

    const component = getByTestId("InfiniteScroll");

    // Implement component test here
  });
});
