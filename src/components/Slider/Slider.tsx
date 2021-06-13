import React, {useEffect, useMemo, useState} from "react";
import { SliderProps, defaultProps } from "./Slider.types";
import classNames from "classnames";

import { default as BaseSlider } from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

import "./Slider.scss";

const markFunc = (v) => {
    return { value: v, label: <div className={'mark'}>{v}</div> }
}

function Slider(props : SliderProps){

    const {style, className, logarithmic, markValues, value, min, max, disabled, onChange, darkTheme} = props;

    const [marks, setMarks] = useState([]);

    const StyledBaseSlider = useMemo(() => withStyles({
        root: {
            color: "#3880ff",
            height: 2,
            padding: "15px 0"
        },
        thumb: {
            height: 28,
            width: 28,
            backgroundColor: "#3880ff",
            marginTop: -14,
            marginLeft: -14,
        },
        active: {},
        valueLabel: {
            left: "calc(-50% + 8px)",
            top: -26,
            "& *": {
                background: "#3880ff",
                borderRadius: 6,
                height: 22,
                transform: 'unset',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                minWidth: 40
            }
        },
        track: {
            height: 2
        },
        rail: {
            height: 2,
            opacity: 1,
            backgroundColor: "#bfbfbf"
        },
        mark: {
            backgroundColor: "#bfbfbf",
            height: 4,
            width: 4,
            borderRadius: 10,
            marginTop: -1,
            opacity: 1,
            marginLeft: -2
        },
        markLabel: {
            marginTop: 10,
            color: darkTheme ? '#d4d4d4'  : '#535353'
        },
        markLabelActive: {
            marginTop: 10,
            color: "#3880ff",
        },
        markActive: {
            backgroundColor: "#3880ff",
            height: 6,
            width: 6,
            borderRadius: 10,
            marginTop: -2,
            opacity: 1
        },
    })(BaseSlider), [darkTheme]);

    useEffect(() => {
        const m = [ markFunc(min), markFunc(max)];

        for (let i = 0 ; i < markValues.length - 1; i++) {
            m.push(markFunc(markValues[i]));
        }

        setMarks(m);
    }, []);


    return <div data-testid="Slider" style={style} className={classNames("slider", className, {disabled: disabled})}>
        <StyledBaseSlider
            value={value}
            getAriaValueText={v => `${v}`}
            scale={(x) => x}
            min={min}
            max={max}
            valueLabelDisplay="auto"
            marks={marks}
            onChange={(e, value) => onChange(value)}
          />
    </div>;
}

Slider.defaultProps = defaultProps;

export default Slider;