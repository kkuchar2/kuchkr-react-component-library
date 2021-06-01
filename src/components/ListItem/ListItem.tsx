import React, {useCallback} from "react";
import { ListItemProps, defaultProps } from "./ListItem.types";
import classNames from "classnames";

import "./ListItem.scss";

function ListItem(props : ListItemProps){

    const { className, index, children, style, onClick } = props;

    const onItemClick = useCallback((e) => {
        if (onClick) {
            onClick(index)
        }
    }, [onClick, index])

    return <div className={classNames("listItem", className)} style={style} onClick={onItemClick}>
        {children}
    </div>
}

ListItem.defaultProps = defaultProps;

export default ListItem;