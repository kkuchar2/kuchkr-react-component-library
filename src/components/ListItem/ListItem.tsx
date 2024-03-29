import React from "react";
import {ListItemProps} from "./ListItem.types";
import {darkTheme, lightTheme} from "./themes";
import {BaseComponent, BaseComponentProps} from "../../hoc";
import {StyledListItem} from "./style";

const _ListItem = (props: BaseComponentProps & ListItemProps) => {

    const { index, children, onClick, disabled, style } = props;

    return <StyledListItem style={style}
                           className={"styledListItem"}
                           disabled={disabled}
                           onClick={() => onClick?.(index)}>
        {children}
    </StyledListItem>
}

_ListItem.defaultProps = {
    index: 0,
    children: [],
    onClick: null,
    disabled: false
};

export const ListItem = BaseComponent<ListItemProps>(_ListItem, lightTheme, darkTheme);