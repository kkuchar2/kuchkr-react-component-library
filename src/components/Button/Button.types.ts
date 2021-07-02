import { BaseProps } from "../../hoc";

export interface ButtonProps extends BaseProps {
    text?: string;
    children?: object;
    onClick?: (e: Event) => void;
}

export interface StyledButtonProps {
    readonly disabled?: boolean;
}

export const styledButtonDefaultProps = {
    disabled: false
}