import { OptionsType, ValueType, ActionMeta } from "react-select";

export interface SelectProps {
    placeholder?: string,
    options?: OptionsType,
    isSearchable?: boolean,
    onChange?: (value: ValueType, action: ActionMeta) => void,
}

export interface StyledSelectProps {}

export const styledSelectDefaultProps = {}