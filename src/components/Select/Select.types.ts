import {OptionsType} from "react-select";

export interface SelectProps {
    placeholder?: string,
    options?: OptionsType<any>,
    isSearchable?: boolean,
    defaultValue?: OptionsType,
    onChange?: (v: OptionsType) => void,
    components?: any,
    triggerOnDefault?: boolean
}

export interface StyledSelectProps {}

export const styledSelectDefaultProps = {}