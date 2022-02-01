import React, { ComponentProps } from 'react'
import {SelectProps} from "./Select.types";
import {BaseComponent, BaseComponentProps} from "../../hoc";
import {selectStyles, StyledSelect, StyledSelectWrapper} from './style';
import {default as BaseSelect} from "react-select";

import {darkTheme, lightTheme} from "./themes";
import {MenuList} from "./SelectMenuList";

export const _Select = (props: BaseComponentProps & SelectProps & ComponentProps<typeof BaseSelect>) => {

    const {
        style,
        theme,
        options,
        placeholder,
        value,
        disabled,
        isSearchable,
        onChange,
        defaultValue,
        maxMenuHeight,
        dataTestId,
        emptyPlaceholder,
        menuPortalTarget,
        formatOptionLabel,
        selectFirstAfterLoad
    } = props;

    const numberOfItems = options.length;

    let shouldDisable = disabled ? true : numberOfItems === 0;
    let defaultSelectValue;

    if (numberOfItems === 0 || (numberOfItems > 0 && !selectFirstAfterLoad)) {
        defaultSelectValue = defaultValue;
    }
    else if (numberOfItems > 0) {
        defaultSelectValue = options[0];
    }

    return <StyledSelectWrapper data-testid={dataTestId} style={style}>
        <StyledSelect
            value={value}
            defaultValue={defaultSelectValue}
            styles={selectStyles(theme, shouldDisable)}
            menuPortalTarget={menuPortalTarget}
            maxMenuHeight={maxMenuHeight}
            placeholder={numberOfItems === 0 ? emptyPlaceholder : placeholder}
            isDisabled={disabled}
            isSearchable={isSearchable}
            options={options}
            formatOptionLabel={formatOptionLabel}
            components={{MenuList}}
            onChange={onChange}/>
    </StyledSelectWrapper>
}

_Select.defaultProps = {
    placeholder: 'Select value',
    maxMenuHeight: 300,
    emptyPlaceholder: 'No items',
    selectFirstAfterLoad: true,
    menuPortalTarget: null
}

export const Select = BaseComponent<SelectProps>(_Select, lightTheme, darkTheme);