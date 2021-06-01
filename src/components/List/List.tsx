import React, {useCallback} from 'react';
import { ListProps, defaultProps } from "./List.types";
import ListItem from "../ListItem";
import InfiniteScroll from "../InfiniteScroll";
import classNames from "classnames";

import "./List.scss";

function List(props : ListProps){

    const { className, height, rowHeight, disabled, items, dataItemRenderer, fetchItems, onItemClick} = props;

    const itemRenderer = useCallback((index) => {
        return <ListItem index={index} onClick={onItemClick}>{dataItemRenderer(items[index])}</ListItem>
    }, [items]);

    return <div style={{height: height}} data-testid="List" className={classNames('list', className, {"disabled" : disabled})}>
        <InfiniteScroll
            items={items}
            height={height}
            rowHeight={rowHeight}
            fetchItems={fetchItems}
            itemRenderer={itemRenderer}
        />
    </div>;
}

List.defaultProps = defaultProps;

export default List;