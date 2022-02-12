import { BaseProps } from "../../hoc";
import {ChangeEvent} from "react";

export interface InputProps extends BaseProps {
    title?: string;
    type?: string;
    id?: string;
    value?: string;
    name?: string;
    minLength?: number | undefined;
    min?: string;
    max?: string;
    autoComplete?: string;
    placeholder?: string;
    onChange?: (e: ChangeEvent<any>) => void;
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