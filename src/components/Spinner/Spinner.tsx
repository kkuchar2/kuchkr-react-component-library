import React, { useCallback } from "react";
import { SpinnerProps } from "./Spinner.types";
import { Text } from '../Text'
import { BaseComponent, BaseComponentProps } from "../../hoc";
import { darkTheme, lightTheme } from "./themes";
import { StyledSpinner } from "./style";
import { GridLoader } from "react-spinners";

export const _Spinner = (props: BaseComponentProps & SpinnerProps) => {

    const {theme, visible, text, size, disabled, dataTestId} = props;

    const color = disabled ? theme.disabledColor : theme.color;
    const speed = disabled ? 0 : 1;

    const renderText = useCallback(() => {
        if (text && visible) {
            return <Text style={{marginRight: 10}} theme={theme.text} text={text} disabled={disabled} />;
        }
    }, [text, visible])

    return <StyledSpinner data-testid={dataTestId}>
        {renderText()}
        <GridLoader color={color} loading={visible} size={size} speedMultiplier={speed}/>
    </StyledSpinner>;
}

_Spinner.defaultProps = {
    visible: true,
    text: 'Loading',
    size: 5
};

export const Spinner = BaseComponent<SpinnerProps>(_Spinner, lightTheme, darkTheme);