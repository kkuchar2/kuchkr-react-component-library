import {ReactNode} from "react";

export interface ListItemProps {
    index: number;
    children: ReactNode;
    onClick?: (index) => void,
    disabled?: boolean
}

export interface StyledListItemProps {
    readonly disabled?: boolean;
}

export const styledListItemDefaultProps = {
    disabled: false
}