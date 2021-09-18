import React from 'react'
import {SelectProps} from "./Select.types";
import {BaseComponent, BaseComponentProps} from "../../hoc";
import {selectStyles, StyledSelect, StyledSelectWrapper} from './style';
import { Scrollbars } from "react-custom-scrollbars";

import {darkTheme, lightTheme} from "./themes";

export const MenuList = (props: any) => {
    return (
        <div style={{ height: 200 }}>
            <Scrollbars renderThumbVertical={renderThumbVertical}>
                {props.children}
            </Scrollbars>
        </div>
    );
};

// scrollbar styles
function renderThumbVertical({ style, ...props }: { style: any }) {
    return (
        <div
            {...props}
            style={{
                ...style,
                backgroundColor: "#707070",
                width: "0.8rem",
                opacity: "0.6",
            }}
        />
    );
}

export const _Select = (props: BaseComponentProps & SelectProps) => {

    const {
        style,
        theme,
        options,
        placeholder,
        disabled,
        isSearchable,
        components,
        onChange,
        defaultValue
    } = props;

    return <StyledSelectWrapper style={style}>
        <StyledSelect
            defaultValue={defaultValue}
            styles={selectStyles(theme)}
            menuPortalTarget={document.body}
            placeholder={placeholder}
            disabled={disabled}
            isSearchable={isSearchable}
            options={options}
            components={{ MenuList }}
            onChange={onChange}>
        </StyledSelect>
    </StyledSelectWrapper>
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