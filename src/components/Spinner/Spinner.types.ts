export interface SpinnerProps {
    className: string;
    visible: boolean;
    text: string;
}

export const defaultProps: SpinnerProps = {
    className: null,
    visible: false,
    text: null
}