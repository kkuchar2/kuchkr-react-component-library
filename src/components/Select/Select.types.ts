import OptionsType from "react-select";
import {ReactNode} from "react";

export interface SelectProps {
    placeholder?: string,
    options?: any,
    isSearchable?: boolean,
    defaultValue?: OptionsType,
    onChange?: (v: OptionsType) => void,
    triggerOnDefault?: boolean,
    maxMenuHeight?: number,
    customOptionRenderer?: (option : OptionsType) => ReactNode,
    emptyPlaceholder?: OptionsType,
    selectFirstAfterLoad?: boolean
}

export interface StyledSelectProps {}

export const styledSelectDefaultProps = {}