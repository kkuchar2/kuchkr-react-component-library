import React from "react";

export interface SliderProps {
    logarithmic?: boolean;
    markValues?: Array<number>;
    defaultValue?: number;
    value?: number;
    step?: number;
    min?: number;
    max?: number;
    useMarks?: boolean;
    displayLabel?: boolean;
    innerModernSlider?: boolean;
    onChange?: (event: React.ChangeEvent<{}>, value: number) => void;
}

export interface StyledCustomRailProps {
    width: number;
}

export interface StyledSliderProps {}

export const styledSliderDefaultProps = {}