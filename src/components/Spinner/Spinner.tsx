import React from "react";
import { SpinnerProps} from "./Spinner.types";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";
import { Text } from '../Text'
import { BaseComponent, BaseComponentProps } from "../../hoc";
import { darkTheme, lightTheme } from "./themes";
import { StyledSpinner } from "./style";

export const _Spinner = (props: BaseComponentProps & SpinnerProps) => {

    const {visible, text} = props;

    return <StyledSpinner>
        <Text text={text}/>
        <MoonLoader css={css`display: block; margin: 0;`} loading={visible} size={20}/>
    </StyledSpinner>;
}

_Spinner.defaultProps = {
    visible: true,
    text: null
};

export const Spinner = BaseComponent<SpinnerProps>(_Spinner, lightTheme, darkTheme);