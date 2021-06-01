import React, {useCallback, useEffect, useState} from "react";
import {SwitchProps, defaultProps} from "./Switch.types";
import classNames from "classnames";

import "./Switch.scss";

function Switch(props: SwitchProps) {

    const {className, switched, onSwitchedChange, leftRenderer, rightRenderer} = props;

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

    return <div data-testid="Switch" className={classNames('switch', className)}>
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
    </div>;
}

Switch.defaultProps = defaultProps;

export default Switch;