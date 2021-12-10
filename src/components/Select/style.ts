import styled from "styled-components";
import Select from "react-select";

import {styledSelectDefaultProps, StyledSelectProps} from "./Select.types";

export const selectStyles = (theme, disabled) => {
    return {
        control: base => ({
            ...base,
            height: theme.height,
            border: theme.border,
            background: disabled ? theme.backgroundColorDisabled : theme.backgroundColor,
            borderRadius: theme.borderRadius,
            boxShadow: 'none',

            '&:hover': {
                cursor: disabled ? 'unset' : theme.cursorOnHover
            }
        }),

        placeholder: base => ({
            ...base,
            color: disabled ? theme.placeholderTextColorDisabled : theme.placeholderTextColor,
            fontSize: theme.placeholderFontSize,
            fontWeight: theme.placeholderFontWeight
        }),

        singleValue: base => ({
            ...base,
            color: theme.selectedValueTextColor,
            fontWeight: theme.selectedValueFontWeight,
            fontSize: theme.selectedValueFontSize
        }),

        dropdownIndicator: base => ({
            ...base,
            color: disabled ? theme.arrowColorDisabled : theme.arrowColor,

            '&:hover': {
                color: disabled ? theme.arrowColorDisabled : theme.arrowColorHover
            }
        }),
        indicatorSeparator: base => ({
            ...base,
             backgroundColor: theme.indicatorSeparatorColor,
            display: theme.indicatorSeparatorDisplay
        }),
        menuList: base => ({
            ...base,
            border: 'none',
            paddingTop: 0,
            paddingBottom: 0,

            '&:hover': {
                cursor: theme.cursorOnHover
            }
        }),
        menu: base => ({
            ...base,
            backgroundColor: theme.listBackgroundColor,
            boxShadow: theme.boxShadow,
            borderRadius: theme.menuBorderRadius,
            overflow: 'hidden',
            padding: 10,
        }),
        menuPortal: base => ({
            ...base,
            zIndex: 9999,
        }),
        valueContainer: base => ({
            ...base,
        }),
        group: base => ({
            ...base,
        }),
        option: (base, state) => ({
            ...base,
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            marginTop: 10,
            marginBottom: 10,
            borderRadius: theme.optionBorderRadius,
            fontSize: theme.itemFontSize,
            fontWeight: theme.itemFontWeight,
            backgroundColor: state.isSelected ? theme.itemSelectedBackgroundColor : theme.listBackgroundColor,
            color: state.isSelected ? theme.itemSelectedTextColor : theme.itemTextColor,

            '&:hover': {
                backgroundColor: state.isSelected ? theme.itemHoverSelectedBackgroundColor : theme.itemHoverBackgroundColor,
                color: state.isSelected ? theme.itemHoverSelectedTextColor : theme.itemHoverTextColor,
                cursor: theme.cursorOnHover
            }
        })
    }
}

export const StyledSelect = styled(Select)<StyledSelectProps>`
  width: ${props => props.theme.width};
  border: none;
`

export const StyledSelectWrapper = styled.div`
  width: ${props => props.theme.width};
  border: none;
`

StyledSelect.defaultProps = styledSelectDefaultProps;