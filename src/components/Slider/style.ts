import styled from "styled-components";
import { styledSliderDefaultProps, StyledSliderProps } from "./Slider.types";

export const StyledSlider = styled.div<StyledSliderProps>`
  width:  ${props => props.theme.width ? props.theme.width : "200px"};
  margin: ${props => props.theme.margin ? props.theme.margin : "0 0 0 0"};
`

export const baseStyle = (theme) => {
    return {
        root: {
            color: theme.fillProgressColor,
            height: 2,
            padding: "15px 0"
        },
        thumb: {
            height: theme.thumbSize,
            width: theme.thumbSize,
            backgroundColor: theme.thumbColor,
            marginTop: theme.thumbMargin.marginTop,
            marginRight: theme.thumbMargin.marginRight,
            marginBottom: theme.thumbMargin.marginBottom,
            marginLeft: theme.thumbMargin.marginLeft
        },
        active: {},
        valueLabel: {
            left: "calc(-50% + 8px)",
            top: -26,
            "& *": {
                background: theme.valueLabelBackground,
                borderRadius: 6,
                height: 22,
                transform: 'unset',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: theme.valueLabelFontColor,
                minWidth: 40
            }
        },
        track: {
            height: theme.trackHeight
        },
        rail: {
            height: theme.railHeight,
            backgroundColor: theme.railColor
        },
        mark: {
            backgroundColor: theme.markColor,
            height: theme.markSize,
            width: theme.markSize,
            borderRadius: 10,
            marginTop: theme.markMargin.marginTop,
            marginRight: theme.markMargin.marginRight,
            marginBottom: theme.markMargin.marginBottom,
            marginLeft: theme.markMargin.marginLeft
        },
        markLabel: {
            marginTop: 10,
            color: theme.markLabelFontColor,
        },
        markLabelActive: {
            marginTop: 10,
            color: theme.markLabelActiveFontColor,
            fontWeight: theme.markLabelActiveFontWeight
        },
        markActive: {
            backgroundColor: theme.markActiveColor,
            height: theme.markActiveSize,
            width: theme.markActiveSize,
            borderRadius: 10,
            marginTop: theme.markMargin.marginTop,
            marginRight: theme.markMargin.marginRight,
            marginBottom: theme.markMargin.marginBottom,
            marginLeft: theme.markMargin.marginLeft,
            opacity: 1
        },
    }
}

StyledSlider.defaultProps = styledSliderDefaultProps;