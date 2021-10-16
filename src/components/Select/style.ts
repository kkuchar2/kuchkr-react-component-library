import styled from "styled-components";
import Select from "react-select";

import {styledSelectDefaultProps, StyledSelectProps} from "./Select.types";

export const selectStyles = (theme) => {
    return {
        control: base => ({
            ...base,
            height: theme.height,
            border: theme.border,
            background: theme.backgroundColor,
            borderRadius: theme.borderRadius,
            boxShadow: 'none',

            '&:hover': {
                cursor: theme.cursorOnHover
            }
        }),

        placeholder: base => ({
            ...base,
            color: theme.placeholderTextColor,
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
            color: theme.arrowColor,

            '&:hover': {
                color: theme.arrowColorHover,
            }
        }),
        indicatorSeparator: base => ({
            ...base,
             backgroundColor: theme.indicatorSeparatorColor,
            display: theme.indicatorSeparatorDisplay
        }),
        menuList: base => ({
            ...base,
            borderRadius: theme.listBorderRadius,
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
            borderRadius: 20,
            boxShadow: theme.boxShadow,
        }),
        menuPortal: base => ({
            ...base,
            zIndex: 9999,
        }),
        valueContainer: base => ({
            ...base,
        }),
        group: base => ({
            ...base
        }),
        option: (base, state) => ({
            ...base,
            height: theme.itemHeight,
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            paddingTop: 0,
            paddingBottom: 0,
            fontSize: theme.itemFontSize,
            fontWeight: theme.itemFontWeight,
            backgroundColor: state.isSelected ? theme.itemSelectedBackgroundColor : theme.listBackgroundColor,
            color: state.isSelected ? theme.itemSelectedTextColor : theme.itemTextColor,

            '&:hover': {
                backgroundColor: theme.itemHoverBackgroundColor,
                color: theme.itemHoverTextColor,
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