import React, { useCallback, useEffect, useState } from "react";
import { SwitchProps } from "./Switch.types";
import classNames from "classnames";
import { darkTheme, lightTheme } from "./themes";
import { BaseComponent, BaseComponentProps } from "../../hoc";
import { StyledSwitch } from "./style";

export const _Switch = (props: BaseComponentProps & SwitchProps) => {

    const {switched, onSwitchedChange, leftRenderer, rightRenderer} = props;

    const [isSwitched, setIsSwitched] = useState(switched);

    useEffect(() => {
        if (onSwitchedChange) {
            onSwitchedChange(isSwitched);
        }
    }, [isSwitched])

    const onToggle = useCallback(() => setIsSwitched(!isSwitched), [isSwitched]);

    const renderLeft = useCallback(() => {
        if (leftRenderer) {
            return leftRenderer();
        }
    }, [leftRenderer])

    const renderRight = useCallback(() => {
        if (rightRenderer) {
            return rightRenderer();
        }
    }, [rightRenderer])

    return <StyledSwitch>
        <div className={classNames('left', {'switched': isSwitched})}>
            {renderLeft()}
        </div>
        <input
            className="react-switch-checkbox"
            id={`react-switch-new`}
            type="checkbox"
            checked={isSwitched}
            onChange={onToggle}
        />
        <label
            className={classNames("react-switch-label", {'switched': isSwitched})}
            htmlFor={`react-switch-new`}>
            <span className={`react-switch-button`}/>
        </label>
        <div className={classNames("right", {'switched': isSwitched})}>
            {renderRight()}
        </div>
    </StyledSwitch>;
}

_Switch.defaultProps = {
    switched: false,
    onSwitchedChange: null,
    leftRenderer: null,
    rightRenderer: null
};

export const Switch = BaseComponent<SwitchProps>(_Switch, lightTheme, darkTheme);