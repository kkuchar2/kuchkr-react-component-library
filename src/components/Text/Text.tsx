import React from "react";
import classNames from "classnames";
import {defaultProps, TextProps} from "./Text.types";

import "./Text.scss";

function Text(props: TextProps) {

    const {className, style, text, children, disabled} = props;

    return <div style={style} className={classNames("text", className, {disabled: disabled})}>
        {text}
        {children}
    </div>;
}

Text.defaultProps = defaultProps;

export default Text;