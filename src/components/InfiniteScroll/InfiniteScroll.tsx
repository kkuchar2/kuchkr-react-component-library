import React, {useCallback} from 'react'
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import { InfiniteLoader, List } from 'react-virtualized';
import {InfiniteScrollProps, defaultProps} from "./InfiniteScroll.types";

function InfiniteScroll(props : InfiniteScrollProps) {

    const {className, fetchItems, height, rowHeight, items, itemRenderer} = props;

    const isRowLoaded = ({ index }) => !!items[index];

    const loadMoreRows = ({ startIndex, stopIndex }) => {
        if (fetchItems) {
            fetchItems(startIndex, stopIndex);
        }
    }
    const rowRenderer = useCallback(({ key, index, style}) => {
        return (
            <div key={key} style={{ ...style, display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                {itemRenderer(index)}
            </div>
        )
    }, [items]);

    return <InfiniteLoader
        isRowLoaded={isRowLoaded}
        loadMoreRows={loadMoreRows}
        rowCount={100000}>
        {({onRowsRendered, registerChild}) => (
            <AutoSizer disableHeight>
                {({width}) => (
                    <List
                        ref={registerChild}
                        height={height}
                        onRowsRendered={onRowsRendered}
                        rowCount={items.length}
                        rowHeight={rowHeight}
                        rowRenderer={rowRenderer}
                        width={width}
                    />
                )}
            </AutoSizer>
        )}
    </InfiniteLoader>
}

InfiniteScroll.defaultProps = defaultProps;

export default InfiniteScroll;
