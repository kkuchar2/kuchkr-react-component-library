import React, {useCallback, useEffect, useState} from 'react'
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
        maxMenuHeight,
        dataTestId,
        emptyPlaceholder,
        selectFirstAfterLoad
    } = props;

    const numberOfItems = options.length;
    let maxHeightForMenu = maxMenuHeight;

    if (numberOfItems * theme.itemHeight < maxMenuHeight) {
        maxHeightForMenu = numberOfItems * theme.itemHeight;
    }

    let shouldDisable = disabled;
    let targetDefaultValue = defaultValue;

    if (numberOfItems === 0) {
        shouldDisable = true;
        targetDefaultValue = null;
    }

    if (!targetDefaultValue && selectFirstAfterLoad) {
        targetDefaultValue = options[0];
    }

    const [value, setValue] = useState(null);

    // When we want to trigger on default and value is loaded with delay
    useEffect(() => {
        if (triggerOnDefault && !value) {
            onChange?.(targetDefaultValue);
        }
    }, [options, triggerOnDefault, value, onChange]);

    useEffect(() => {
        if (triggerOnDefault) {
            onChange?.(defaultValue);
        }
    }, [triggerOnDefault]);

    const onSelectValue = useCallback((v) => {
        setValue(v);
        onChange?.(v);
    }, [onChange]);

    return <StyledSelectWrapper data-testid={dataTestId} style={style}>
        <StyledSelect
            value={!value ? targetDefaultValue : value}
            defaultValue={targetDefaultValue}
            styles={selectStyles(theme, shouldDisable)}
            menuPortalTarget={document.body}
            placeholder={numberOfItems === 0 ? emptyPlaceholder : placeholder}
            maxMenuHeight={maxHeightForMenu}
            isDisabled={disabled}
            isSearchable={isSearchable}
            options={options}
            components={{MenuList}}
            onChange={onSelectValue} />
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
    maxMenuHeight: 200,
    emptyPlaceholder: 'No items',
    selectFirstAfterLoad: true
}

export const Select = BaseComponent<SelectProps>(_Select, lightTheme, darkTheme);