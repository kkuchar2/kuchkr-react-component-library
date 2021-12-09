import OptionsType from "react-select";

export interface SelectProps {
    placeholder?: string,
    options?: any,
    isSearchable?: boolean,
    defaultValue?: OptionsType,
    onChange?: (v: OptionsType) => void,
    components?: any,
    triggerOnDefault?: boolean,
    maxMenuHeight?: number,
    emptyPlaceholder?: OptionsType,
    selectFirstAfterLoad?: boolean
}

export interface StyledSelectProps {}

export const styledSelectDefaultProps = {}