export interface TextProps {
    text?: string;
}

export interface StyledTextProps {
    readonly disabled?: boolean;
}

export const styledTextDefaultProps = {
    disabled: false
}