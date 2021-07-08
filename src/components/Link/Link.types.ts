import { BaseProps } from "../../hoc";

export interface LinkProps extends BaseProps {
    text?: string;
    onClick?: (e: Event) => void;
    to: string;
    children?: object;
}

export interface StyledLinkProps {
    readonly disabled?: boolean;
}

export const styledLinkDefaultProps = {
    disabled: false
}