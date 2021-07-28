import styled from "styled-components";
import { styledSliderDefaultProps, StyledSliderProps } from "./Slider.types";

export const StyledSlider = styled.div<StyledSliderProps>`
  width: 200px;
  margin: ${props => props.theme.margin ? props.theme.margin : "0 0 0 0"};
`

export const baseStyle = (theme) => {
    return {
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
            color: '#d4d4d4',
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
    }
}

StyledSlider.defaultProps = styledSliderDefaultProps;