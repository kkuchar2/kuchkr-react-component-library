import React from "react";
import { SpinnerProps, defaultProps } from "./Spinner.types";
import classNames from "classnames";
import MoonLoader from "react-spinners/MoonLoader";
import { css } from "@emotion/react";
import Text from '../Text/Text'

import "./Spinner.scss";

const override = css`
  display: block;
  margin: 0;
`;

function Spinner(props : SpinnerProps){

    const { className, visible, text } = props;

    return <div data-testid="Spinner" className={classNames('spinner', className)}>
        <Text text={text} />
        <MoonLoader css={override} loading={visible} size={20} />
    </div>;
}

Spinner.defaultProps = defaultProps;

export default Spinner;