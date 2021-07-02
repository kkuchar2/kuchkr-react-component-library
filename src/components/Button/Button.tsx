import React from "react";
import { ButtonProps} from "./Button.types";
import { darkTheme, lightTheme } from "./themes";
import { BaseComponent, BaseComponentProps } from "../../hoc";
import { Text } from "../Text";
import { StyledButton } from "./style";

export const _Button = (props: BaseComponentProps & ButtonProps) => {

    const {disabled, onClick, text, theme } = props;

    const onButtonClick = (e) => {
        if (disabled) {
            return;
        }

        if (onClick) {
            onClick(e);
        }
    };

    return <StyledButton
        type={"submit"}
        onClick={onButtonClick}
        aria-label={"submit-button"}
        disabled={disabled}>

        <div className={"content"}>
            <Text text={text} disabled={disabled} theme={{
                textColor: theme.textColor,
                disabledTextColor: theme.disabledTextColor
            }} />
        </div>
    </StyledButton>
}

_Button.defaultProps = {
    text: 'Primary button',
    children: null,
    onClick: null,
};

export const Button = BaseComponent<ButtonProps>(_Button, lightTheme, darkTheme);