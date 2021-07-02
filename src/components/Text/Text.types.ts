export interface TextProps {
    text?: string;
}

export interface StyledTextProps {
    readonly disabled?: boolean;
    readonly marginBottom?: number;
}

export const styledTextDefaultProps = {
    disabled: false,
    marginBottom: 0
}