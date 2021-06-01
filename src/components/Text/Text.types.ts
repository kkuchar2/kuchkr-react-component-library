export interface TextProps {
    className?: string;
    style?: object;
    text?: string;
    children?: object;
    disabled?: boolean;
}

export const defaultProps: TextProps = {
    className: null,
    style: null,
    text: "",
    children: null,
    disabled: false,
}

