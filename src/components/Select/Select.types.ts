import { OptionsType, ValueType, ActionMeta } from "react-select";

export interface IOptionsType extends OptionsType {

}

export interface SelectProps {
    placeholder?: string,
    options?: IOptionsType,
    isSearchable?: boolean,
    onChange?: (value: ValueType, action: ActionMeta) => void,
}

export interface StyledSelectProps {}

export const styledSelectDefaultProps = {}