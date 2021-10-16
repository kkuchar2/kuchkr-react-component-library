export interface ListItemProps {
    index: number;
    children: unknown | Array<unknown>;
    onClick?: (index) => void,
    disabled?: boolean
}

export interface StyledListItemProps {
    readonly disabled?: boolean;
}

export const styledListItemDefaultProps = {
    disabled: false
}