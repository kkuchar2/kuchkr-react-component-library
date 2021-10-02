export interface TextProps {
    text?: string;
    useOverflow?: boolean;
}

export interface StyledTextProps {
    readonly disabled?: boolean;
}

export const styledTextDefaultProps = {
    disabled: false
}