import { setConsoleOptions, withConsole } from '@storybook/addon-console';
import '@storybook/addon-actions/register';
import { addDecorator } from '@storybook/react';
import { themes } from '@storybook/theming'


setConsoleOptions({
    panelExclude: [],
});

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

export const parameters = {
    darkMode: {
        current: 'dark',
        darkClass: 'theme-dark',
        lightClass: 'theme-light',
        stylePreview: true,
        dark: { ...themes.dark, appContentBg: '#1F1F24' },
        light: { ...themes.normal, appContentBgBg: 'white' }
    }
};