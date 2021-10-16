import React from 'react';
import {TextProps} from "./Text.types";
import {darkTheme, lightTheme} from "./themes";
import {BaseComponent, BaseComponentProps} from "../../hoc";
import {StyledText} from './style';
import {Scrollbars} from 'react-custom-scrollbars';

export const _Text = (props: BaseComponentProps & TextProps) => {

    const {style, theme, text, disabled, useOverflow, dataTestId} = props;

    if (useOverflow) {
        return <Scrollbars autoHeight style={{...style, maxWidth: theme.maxWidth}}>
            <StyledText data-testid={dataTestId} theme={theme} disabled={disabled}>{text}</StyledText>
        </Scrollbars>
    }

    return <StyledText data-testid={dataTestId} theme={theme} disabled={disabled}>{text}</StyledText>
}

_Text.defaultProps = {
    text: "Text",
    useOverflow: false,
    children: null
}

export const Text = BaseComponent<TextProps>(_Text, lightTheme, darkTheme);