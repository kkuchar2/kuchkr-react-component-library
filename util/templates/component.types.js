module.exports = (componentName) => ({
  content: `export interface ${componentName}Props {
    className: string;
}

export const defaultProps: ${componentName}Props = {
    className: null
}`,
  extension: `.types.ts`
});