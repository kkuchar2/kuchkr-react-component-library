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

    const { logarithmic, markValues, defaultValue, min, max, disabled, onChange, theme } = props;

    const [marks, setMarks] = useState([]);
    const [value, setValue] = useState(defaultValue);

    const StyledBaseSlider = useMemo(() => withStyles(baseStyle(theme))(BaseSlider), [theme]);

    useEffect(() => {
        const m = [ markFunc(min), markFunc(max)];

        for (let i = 0 ; i < markValues.length - 1; i++) {
            m.push(markFunc(markValues[i]));
        }

        setMarks(m);
    }, []);

    const onSliderChange = useCallback((v) => {
        if (onChange) {
            onChange(v);
        }
        setValue(v);
    }, [onChange])


    return <StyledSlider>
        <StyledBaseSlider
            defaultValue={defaultValue}
            value={value}
            getAriaValueText={v => `${v}`}
            scale={(x) => x}
            min={min}
            max={max}
            valueLabelDisplay="auto"
            marks={marks}
            onChange={(e, value) => onSliderChange(value)}
        />
    </StyledSlider>;
}

_Slider.defaultProps = {
    logarithmic: false,
    markValues: [],
    defaultValue: 0,
    min: 0,
    max: 100,
    disabled: false,
    onChange: v => {}
};

export const Slider = BaseComponent<SliderProps>(_Slider, lightTheme, darkTheme);