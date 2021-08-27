import styled from "styled-components";
import Select from "react-select";

import {styledSelectDefaultProps, StyledSelectProps} from "./Select.types";

export const selectStyles = (theme) => {
    return {
        control: base => ({
            ...base,
            height: theme.height,
            border: theme.border,
            boxShadow: theme.boxShadow,
            background: theme.backgroundColor,
            borderRadius: theme.borderRadius,

        }),

        placeholder: base => ({
            ...base,
            color: theme.placeholderTextColor,
        }),

        singleValue: base => ({
            ...base,
            color: theme.selectedSingleValueTextColor,
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
             backgroundColor: theme.indicatorSeparatorColor
        }),
        menuList: base => ({
            ...base,
            color: theme.listItemTextColor,
            borderRadius: theme.listBorderRadius,
            border: 'none',
            paddingTop: 0,
            paddingBottom: 0
        }),
        menu: base => ({
            ...base,
            backgroundColor: theme.listBackgroundColor,
            borderRadius: theme.listBorderRadius,
            boxShadow: 'none'
        }),
        menuPortal: base => ({
            ...base,
            zIndex: 9999
        }),
        valueContainer: base => ({
            ...base,
        }),
        group: base => ({
            ...base
        }),
        option: (base, state) => ({
            ...base,
            height: theme.listItemHeight,
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            borderRadius: theme.listBorderRadius,
            paddingTop: 0,
            paddingBottom: 0,
            backgroundColor: state.isSelected ? theme.itemSelectedBackgroundColor : theme.listBackgroundColor,

            '&:hover': {
                backgroundColor: theme.itemHoverBackgroundColor,
                color: theme.itemHoverTextColor,
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