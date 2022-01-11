import React, {useCallback, useEffect, useState} from "react";
import {SwitchProps} from "./Switch.types";
import {darkTheme, lightTheme} from "./themes";
import {BaseComponent, BaseComponentProps} from "../../hoc";
import {StyledHandle, StyledSwitch } from "./style";

export const _Switch = (props: BaseComponentProps & SwitchProps) => {

    const {isOn, disabled, onChange, theme} = props;

    const [internalIsOn, setInternalIsOn] = useState<boolean | undefined>(isOn === undefined ? false : isOn);

    const toggleSwitch = useCallback(() => {
        if (disabled) {
            return;
        }

        if (isOn !== undefined) {
            onChange?.(!isOn);
        }
        else {
            setInternalIsOn(!internalIsOn);
            onChange?.(!internalIsOn);
        }
    }, [internalIsOn, disabled, isOn]);

    let target = isOn === undefined ? internalIsOn : isOn;

    return  <StyledSwitch theme={theme} data-isOn={target} disabled={disabled} onClick={toggleSwitch}>
        <StyledHandle data-isOn={target} disabled={disabled} layout transition={theme.knobTransition} />
    </StyledSwitch>
}

_Switch.defaultProps = {
    isOn: undefined,
};

export const Switch = BaseComponent<SwitchProps>(_Switch, lightTheme, darkTheme);