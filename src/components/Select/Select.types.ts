import {OptionsType} from "react-select";

export interface SelectProps {
    placeholder?: string,
    options?: OptionsType<any>,
    isSearchable?: boolean,
    defaultValue?: OptionsType,
    onChange?: (value: any, action : any) => void,
    components?: any,
}

export interface StyledSelectProps {}

export const styledSelectDefaultProps = {}