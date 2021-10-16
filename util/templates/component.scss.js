module.exports = (componentName) => ({
  content: `@import "../../styles/variables.scss";
@import "../../styles/typography.scss";
@import "../../styles/theme";

.${componentName.toLowerCase()} {
}
`,
  extension: `.scss`
});
