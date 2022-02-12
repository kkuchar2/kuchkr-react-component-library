const path = require("path");

module.exports = {
    stories: ["../src/**/*.stories.tsx"],
    core: {
        builder: "webpack5",
    },
    addons: [
        '@storybook/addon-actions',
        '@storybook/addon-docs',
        "@storybook/addon-essentials",
        "@storybook/addon-a11y",
        "storybook-addon-designs",
        "./addons/preset.js"
    ],
    webpackFinal: async (config) => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            loader: require.resolve("babel-loader"),
            options: {
                presets: [["react-app", {flow: false, typescript: true}]]
            }
        });

        config.resolve.extensions.push(".ts", ".tsx");

        return config;
    }
};