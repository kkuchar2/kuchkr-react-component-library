import { BaseProps } from "../../hoc";

export interface InputProps extends BaseProps {
    title?: string;
    type?: string;
    id?: string;
    value?: string;
    initialValue?: string,
    name?: string;
    autoComplete?: string;
    placeholder?: string;
    onChange?: (v: string) => void;
    onEnter?: () => void;
    required?: boolean;
    withIcon?: boolean;
}

export interface StyledInputProps {
    readonly disabled?: boolean;
}

export const defaultStyledInputProps = {}