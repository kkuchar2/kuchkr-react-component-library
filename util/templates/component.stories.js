module.exports = (componentName) => ({
  content: `import React from "react";
import ${componentName} from "./${componentName}";

export default {
    title: "${componentName}"
};

export const Default${componentName} = () => <div>
    <div className={"title"}>This is component ${componentName}</div>
</div>
`,
  extension: `.stories.tsx`
});
