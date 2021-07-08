import React, { useCallback } from "react";
import { ButtonProps} from "./Button.types";
import { darkTheme, lightTheme } from "./themes";
import { BaseComponent, BaseComponentProps } from "../../hoc";
import { Text } from "../Text";
import { StyledButton } from "./style";

export const _Button = (props: BaseComponentProps & ButtonProps) => {

    const {style, disabled, onClick, text, theme, children} = props;

    const onButtonClick = (e) => {
        if (disabled) {
            return;
        }

        if (onClick) {
            onClick(e);
        }
    };

    const renderButtonContent = useCallback(() => {
        if (text) {
            return <Text text={text} disabled={disabled} theme={theme.text} />
        }
        return children;
    }, [text, children])

    return <StyledButton style={style} type={"submit"} onClick={onButtonClick} disabled={disabled}>
       {renderButtonContent()}
    </StyledButton>
}

_Button.defaultProps = {
    text: null,
    children: null,
    onClick: null,
};

export const Button = BaseComponent<ButtonProps>(_Button, lightTheme, darkTheme);