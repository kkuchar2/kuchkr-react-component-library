import React from 'react'
import {SelectProps} from "./Select.types";
import {BaseComponent, BaseComponentProps} from "../../hoc";
import {selectStyles, StyledSelect,} from './style';

import {darkTheme, lightTheme} from "./themes";

export const _Select = (props: BaseComponentProps & SelectProps) => {

    const {
        style,
        theme,
        options,
        placeholder,
        disabled,
        isSearchable,
        onChange,
    } = props;

    return <StyledSelect
        styles={selectStyles(theme)}
        style={style}
        menuPortalTarget={document.body}
        placeholder={placeholder}
        disabled={disabled}
        isSearchable={isSearchable}
        options={options}
        onChange={onChange}>
    </StyledSelect>
}

_Select.defaultProps = {
    placeholder: 'Select value',
    options: [],
    fetchItems: null,
    dataItemRenderer: null,
    isSearchable: false,
    initialIndex: 0
}

export const Select = BaseComponent<SelectProps>(_Select, lightTheme, darkTheme);