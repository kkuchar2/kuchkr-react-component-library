import React, {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {SliderProps} from "./Slider.types";
import {darkTheme, lightTheme} from "./themes";
import {BaseComponent, BaseComponentProps} from "../../hoc";

import {withStyles} from '@material-ui/core/styles';
import {Text} from "../Text"
import {default as BaseSlider} from '@material-ui/core/Slider';
import {
    baseStyle,
    leftCustomMarkStyle,
    rightCustomMarkStyle,
    StyledCustomRail,
    StyledCustomTrack,
    StyledSlider
} from "./style";

const markFunc = (v) => {
    return {value: v, label: <div className={'mark'}>{v}</div>}
}

export const _Slider = (props: BaseComponentProps & SliderProps) => {

    const {
        style,
        logarithmic,
        markValues,
        defaultValue,
        value,
        min,
        max,
        disabled,
        useMarks,
        displayLabel,
        innerModernSlider,
        onChange,
        theme
    } = props;

    const [marks, setMarks] = useState([]);
    const [internalValue, setInternalValue] = useState(defaultValue);

    const customRailRef = useRef(null)

    const StyledBaseSlider = useMemo(() => {
        return withStyles(baseStyle(theme, innerModernSlider))(BaseSlider)
    }, [theme, innerModernSlider]);

    useEffect(() => {
        if (value) {
            setInternalValue(value);
        }
    }, [value]);

    useEffect(() => {
        const m = [markFunc(min), markFunc(max)];

        for (let i = 0; i < markValues.length; i++) {
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

    const renderCustomRail = useCallback(() => {
        if (innerModernSlider) {
            const calculatedWidth = ((internalValue - min) / (max - min)) * 100
            return <StyledCustomTrack>
                <StyledCustomRail color={theme.railColor} width={calculatedWidth} ref={customRailRef}/>
            </StyledCustomTrack>
        }
    }, [innerModernSlider, theme, internalValue])

    const renderCustomLeftMark = useCallback(() => {
        if (innerModernSlider) {
            return <Text style={leftCustomMarkStyle(theme)} text={min.toString()}/>
        }
    }, [innerModernSlider, theme, internalValue, min])

    const renderCustomRightMark = useCallback(() => {
        if (innerModernSlider) {
            return <Text style={rightCustomMarkStyle(theme)} text={max.toString()}/>
        }
    }, [innerModernSlider, theme, internalValue, max])

    return <StyledSlider style={style}>
        <StyledBaseSlider
            defaultValue={defaultValue}
            value={internalValue}
            getAriaValueText={v => `${v}`}
            scale={(x) => x}
            min={min}
            max={max}
            disabled={disabled}
            valueLabelDisplay={displayLabel ? 'on' : 'off'}
            marks={useMarks && !innerModernSlider ? marks : []}
            onChange={(e, v) => onSliderChange(v)}
        />
        {renderCustomRightMark()}
        {renderCustomLeftMark()}
        {renderCustomRail()}
    </StyledSlider>
        ;
}

_Slider.defaultProps = {
    logarithmic: false,
    markValues: [],
    defaultValue: 0,
    value: 0,
    min: 0,
    max: 100,
    disabled: false,
    displayLabel: false,
    innerModernSlider: false,
    useMarks: true,
    onChange: v => {
    }
};

export const Slider = BaseComponent<SliderProps>(_Slider, lightTheme, darkTheme);