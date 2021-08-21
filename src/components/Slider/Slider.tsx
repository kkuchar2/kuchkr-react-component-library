import React, { useCallback, useEffect, useMemo, useState } from "react";
import { SliderProps} from "./Slider.types";
import { darkTheme, lightTheme } from "./themes";
import { BaseComponent, BaseComponentProps } from "../../hoc";

import { withStyles } from '@material-ui/core/styles';

import { default as BaseSlider } from '@material-ui/core/Slider';
import { baseStyle, StyledSlider } from "./style";

const markFunc = (v) => {
    return {value: v, label: <div className={'mark'}>{v}</div>}
}

export const _Slider = (props: BaseComponentProps & SliderProps) => {

    const { logarithmic, markValues, defaultValue, value, min, max, disabled, useMarks, onChange, theme } = props;

    const [marks, setMarks] = useState([]);
    const [internalValue, setInternalValue] = useState(defaultValue);

    const StyledBaseSlider = useMemo(() => withStyles(baseStyle(theme))(BaseSlider), [theme]);

    useEffect(() => {
        if (value) {
            setInternalValue(value);
        }
    }, [value]);

    useEffect(() => {
        const m = [ markFunc(min), markFunc(max)];

        for (let i = 0 ; i < markValues.length; i++) {
            m.push(markFunc(markValues[i]));
        }
        setMarks(m);
    }, [markValues]);

    const onSliderChange = useCallback((v) => {
        if (onChange) {
            onChange(v);
        }
        setInternalValue(v);
    }, [onChange])


    return <StyledSlider>
        <StyledBaseSlider
            defaultValue={defaultValue}
            value={internalValue}
            getAriaValueText={v => `${v}`}
            scale={(x) => x}
            min={min}
            max={max}
            valueLabelDisplay="auto"
            marks={useMarks ? marks: []}
            onChange={(e, v) => onSliderChange(v)}
        />
    </StyledSlider>;
}

_Slider.defaultProps = {
    logarithmic: false,
    markValues: [],
    defaultValue: 0,
    value: 0,
    min: 0,
    max: 100,
    disabled: false,
    useMarks: true,
    onChange: v => {}
};

export const Slider = BaseComponent<SliderProps>(_Slider, lightTheme, darkTheme);