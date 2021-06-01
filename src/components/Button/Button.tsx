import React from "react";
import {ButtonProps, defaultProps} from "./Button.types";
import classNames from "classnames";
import Text from "../Text";

import "./Button.scss";

function Button(props : ButtonProps) {

    const {className, disabled, onClick, text, children} = props;

    const onButtonClick = () => {
        if (disabled) {
            return;
        }

        if (onClick) {
            onClick();
        }
    };

    const getAdditionalClassName = () => disabled ? "disabled" : "enabled";

    return <button
        className={classNames("button", className, getAdditionalClassName())}
        type={"submit"}
        onClick={onButtonClick}
        aria-label={"submit-button"}>
        <div className={"content"}>
            <Text text={text}/>
            {children}
        </div>
    </button>;
}

Button.defaultProps = defaultProps;

export default Button;