export interface ButtonProps {
    className?: string;
    disabled?: boolean;
    onClick?: Function;
    text?: string;
    children?: object;
}


export const defaultProps: ButtonProps = {
    className: null,
    disabled: false,
    onClick: () => {},
    text: null,
    children: null
}
