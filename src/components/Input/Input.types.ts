import { BaseProps } from "../../hoc";

export interface InputProps extends BaseProps {
    title?: string;
    type?: string;
    id?: string;
    value?: string;
    name?: string;
    min?: string;
    max?: string;
    autoComplete?: string;
    placeholder?: string;
    onChange?: (v: string) => void;
    onEnter?: () => void;
    required?: boolean;
    withIcon?: boolean;
    IconComponent?: JSX.Element;
    autoFocus?: boolean;
}

export interface StyledInputProps {
    readonly disabled?: boolean;
}

export const defaultStyledInputProps = {}