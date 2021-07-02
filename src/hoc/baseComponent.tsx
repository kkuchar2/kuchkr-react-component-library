import React from "react";
import { ThemeProvider } from 'styled-components';
import { Dictionary } from "../util/BaseTypes.types";

export interface BaseComponentProps {
    displayName?: string,
    theme?: Dictionary<any>,
    disabled?: boolean
}

export interface BaseProps {}

export const BaseComponent = <WrappedComponentProps extends BaseProps>(Component, lightTheme, darkTheme) => {

    function wrapped (props : (BaseComponentProps & WrappedComponentProps)) {

        const {theme, disabled, ...rest} = props;

        const appliedTheme = theme ? theme : lightTheme;

        return <ThemeProvider theme={appliedTheme}>
            <Component theme={appliedTheme} disabled={disabled} {...rest} />
        </ThemeProvider>
    }

    // HOC will have default props of itself + wrapped component props
    wrapped.defaultProps = { theme: lightTheme, disabled: false, ...Component.defaultProps }
    wrapped.displayName = "UnnamedComponent"
    wrapped.darkTheme = darkTheme;
    wrapped.lightTheme = lightTheme;

    return wrapped;
}