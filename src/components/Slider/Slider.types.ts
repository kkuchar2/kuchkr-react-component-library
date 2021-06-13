export interface SliderProps {
    style?: object;
    className?: string;
    logarithmic?: boolean;
    markValues?: Array<number>;
    value?: number;
    min?: number;
    max?: number;
    disabled?: boolean;
    onChange?: Function;
    darkTheme?: boolean
}

export const defaultProps: SliderProps = {
    style: {},
    className: null,
    logarithmic: false,
    markValues: [],
    value: 0,
    min: 0,
    max: 100,
    disabled: false,
    onChange: v => {},
    darkTheme: false,
}