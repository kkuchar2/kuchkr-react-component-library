module.exports = (componentName) => ({
  content: `import React from "react";
import { render } from "@testing-library/react";
import ${componentName} from "./${componentName}";
import { ${componentName}Props } from "./${componentName}.types";

describe("Test Component", () => {
  let props: ${componentName}Props;

  const renderComponent = () => render(<${componentName} {...props} />);

  it("should render foo text correctly", () => {
   
    const { getByTestId } = renderComponent();

    const component = getByTestId("${componentName}");

    // Implement component test here
  });
});
`,
  extension: `.test.tsx`
});
