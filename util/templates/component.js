module.exports = (componentName) => ({
  content: `import React from "react";
import { ${componentName}Props, defaultProps } from "./${componentName}.types";
import classNames from "classnames";

import "./${componentName}.scss";

function ${componentName}(props : ${componentName}Props){

    const { className } = props;

    return <div data-testid="${componentName}" className={classNames('${componentName.toLowerCase()}', className)} />;
}

${componentName}.defaultProps = defaultProps;

export default ${componentName};`,
  extension: `.tsx`
});
