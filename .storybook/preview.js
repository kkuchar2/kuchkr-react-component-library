import '@storybook/addon-actions/register';
import { themes } from '@storybook/theming'

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    viewMode: 'docs',
    controls: { expanded: true },
    docs: {
        theme: themes.dark
    },
    darkMode: {
        current: 'dark',
        darkClass: 'theme-dark',
        lightClass: 'theme-light',
        stylePreview: true
    }
};

function clickDocsButtonOnFirstLoad() {
    window.removeEventListener("load", clickDocsButtonOnFirstLoad);

    try {
        const docsButtonSelector = window.parent.document.evaluate(
            "//button[contains(., 'Docs')]",
            window.parent.document,
            null,
            XPathResult.ANY_TYPE,
            null
        );

        const button = docsButtonSelector.iterateNext();

        button.click();
    } catch (error) {
        // Do nothing if it wasn't able to click on Docs button.
    }
}

window.addEventListener("load", clickDocsButtonOnFirstLoad);