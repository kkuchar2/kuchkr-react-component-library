import React, {useCallback, useEffect, useState} from 'react'
import {SelectProps} from "./Select.types";
import {BaseComponent, BaseComponentProps} from "../../hoc";
import {selectStyles, StyledSelect, StyledSelectWrapper} from './style';
import {Scrollbars} from "react-custom-scrollbars";

import {darkTheme, lightTheme} from "./themes";

const MenuList = (props: any) => {
    const {...data} = props;

    console.log('Max height: ' + data.selectProps.maxMenuHeight);
    console.log('Preferred height: ' + data.selectProps.maxMenuHeight);

    return <div style={{
        maxHeight: data.selectProps.maxMenuHeight,
        borderRadius: data.selectProps.listBorderRadius
    }}>
        <Scrollbars autoHeight renderThumbVertical={renderThumbVertical}
                    style={{
                        boxSizing: 'border-box',
                    }}>
            {props.children}
        </Scrollbars>
    </div>;
};

const formatOptionLabel = (customOptionRenderer) => {
    if (!customOptionRenderer) {
        return null;
    }
    return ({value, label, customAbbreviation}) => customOptionRenderer(label, value);
}

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
        customOptionRenderer,
        onChange,
        defaultValue,
        triggerOnDefault,
        maxMenuHeight,
        dataTestId,
        emptyPlaceholder,
        selectFirstAfterLoad,
        menuPortalTarget
    } = props;

    const numberOfItems = options.length;

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
            menuPortalTarget={menuPortalTarget}
            maxMenuHeight={maxMenuHeight}
            placeholder={numberOfItems === 0 ? emptyPlaceholder : placeholder}
            isDisabled={disabled}
            isSearchable={isSearchable}
            options={options}
            formatOptionLabel={formatOptionLabel(customOptionRenderer)}
            components={{MenuList}}
            onChange={onSelectValue} />
    </StyledSelectWrapper>
}

_Select.defaultProps = {
    placeholder: 'Select value',
    options: [],
    fetchItems: null,
    customOptionRenderer: null,
    isSearchable: false,
    initialIndex: 0,
    defaultValue: null,
    triggerOnDefault: false,
    maxMenuHeight: 300,
    emptyPlaceholder: 'No items',
    selectFirstAfterLoad: true,
    menuPortalTarget: null
}

export const Select = BaseComponent<SelectProps>(_Select, lightTheme, darkTheme);