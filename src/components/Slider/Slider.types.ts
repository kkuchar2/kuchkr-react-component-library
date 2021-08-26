export interface SliderProps {
    logarithmic?: boolean;
    markValues?: Array<number>;
    defaultValue?: number;
    value?: number;
    min?: number;
    max?: number;
    useMarks?: boolean;
    displayLabel?: boolean;
    innerModernSlider?: boolean;
    onChange?: (v) => void;
}

export interface StyledCustomRailProps {
    width: number;
}

export interface StyledSliderProps {}

export const styledSliderDefaultProps = {}