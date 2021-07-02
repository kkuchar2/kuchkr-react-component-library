export interface SliderProps {
    logarithmic?: boolean;
    markValues?: Array<number>;
    defaultValue?: number;
    value?: number;
    min?: number;
    max?: number;
    onChange?: (v) => void;
}
export interface StyledSliderProps {}

export const styledSliderDefaultProps = {}