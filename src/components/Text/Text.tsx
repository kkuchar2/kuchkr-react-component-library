import React from 'react';
import {TextProps} from "./Text.types";
import {darkTheme, lightTheme} from "./themes";
import {BaseComponent, BaseComponentProps} from "../../hoc";
import {StyledText} from './style';
import {Scrollbars} from 'react-custom-scrollbars';

export const _Text = (props: BaseComponentProps & TextProps) => {

    const {style, theme, text, disabled} = props;

    return <Scrollbars  autoHeight style={{...style, maxWidth: theme.maxWidth}}>
        <StyledText theme={theme} disabled={disabled}>{text}</StyledText>
    </Scrollbars>;
}

_Text.defaultProps = {
    text: "Text",
    children: null
}

export const Text = BaseComponent<TextProps>(_Text, lightTheme, darkTheme);