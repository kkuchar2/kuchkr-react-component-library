import React, {useEffect} from 'react'
import {SelectProps} from "./Select.types";
import {BaseComponent, BaseComponentProps} from "../../hoc";
import {selectStyles, StyledSelect, StyledSelectWrapper} from './style';
import {Scrollbars} from "react-custom-scrollbars";

import {darkTheme, lightTheme} from "./themes";

const MenuList = (props: any) => {
    const {...data} = props;

    return <div style={{
        height: data.selectProps.maxMenuHeight,
        overflow: 'hidden',
        borderRadius: data.selectProps.listBorderRadius
    }}>
        <Scrollbars renderThumbVertical={renderThumbVertical}>
            {props.children}
        </Scrollbars>
    </div>;
};

const renderThumbVertical = ({style, ...props}: { style: any }) => {
    return <div
        {...props}
        style={{
            ...style,
            backgroundColor: "#707070",
            width: "0.8rem",
            opacity: "0.6",
        }}
    />
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
        defaultValue,
        triggerOnDefault,
        maxMenuHeight
    } = props;

    useEffect(() => {
        if (triggerOnDefault) {
            onChange?.(defaultValue);
        }
    }, [triggerOnDefault])

    const numberOfItems = options.length;
    let maxHeightForMenu = maxMenuHeight;

    if (numberOfItems * theme.itemHeight < maxMenuHeight) {
        maxHeightForMenu = numberOfItems * theme.itemHeight;
    }

    return <StyledSelectWrapper style={style}>
        <StyledSelect
            defaultValue={defaultValue}
            styles={selectStyles(theme)}
            menuPortalTarget={document.body}
            placeholder={placeholder}
            maxMenuHeight={maxHeightForMenu}
            isSearchable={isSearchable}
            options={options}
            components={{MenuList}}
            onChange={onChange} />
    </StyledSelectWrapper>
}

_Select.defaultProps = {
    placeholder: 'Select value',
    options: [],
    fetchItems: null,
    dataItemRenderer: null,
    isSearchable: false,
    initialIndex: 0,
    defaultValue: null,
    triggerOnDefault: false,
    maxMenuHeight: 200
}

export const Select = BaseComponent<SelectProps>(_Select, lightTheme, darkTheme);