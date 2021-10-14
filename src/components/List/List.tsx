import React, {useCallback, useEffect, useRef} from 'react';
import {ListProps} from "./List.types";
import {darkTheme, lightTheme} from "./themes";
import {BaseComponent, BaseComponentProps} from "../../hoc";
import {StyledList} from './style';
import {Spinner} from "../Spinner";
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import {CellMeasurer, CellMeasurerCache, InfiniteLoader, List as VirtualizedList} from 'react-virtualized';
import styled from "styled-components";
import {v4 as uuidv4} from 'uuid';
import {ListItem} from "../ListItem";
import {Scrollbars} from 'react-custom-scrollbars';

const StyledSpinner = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  pointer-events: none;
`

const cache = new CellMeasurerCache({minHeight: 50, fixedWidth: true});


export const _List = (props: BaseComponentProps & ListProps) => {

    const {
        theme,
        fixedHeight,
        rowHeight,
        disabled,
        items,
        dataItemRenderer,
        fetchItems,
        onItemClick,
        isFetching
    } = props;


    const listRef = useRef(null);

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        cache.clearAll();
        listRef.current?.recomputeRowHeights();
    }, [items]);


    const fetchData = useCallback((start = 0, stop = 1) => {
        fetchItems?.();
    }, [fetchItems]);

    const rowRenderer = useCallback((args) => {

        const {index, parent, style} = args;

        return <CellMeasurer
            cache={cache}
            columnIndex={0}
            key={uuidv4()}
            parent={parent}
            rowIndex={index}>
            <ListItem
                key={uuidv4()}
                index={index}
                onClick={onItemClick}
                disabled={disabled}
                theme={theme.listItemStyle}
                style={style}>
                {dataItemRenderer(index, disabled, items[index])}
            </ListItem>
        </CellMeasurer>
    }, [items, onItemClick, theme, disabled, dataItemRenderer]);

    const isRowLoaded = ({index}) => !!items[index];

    const handleScroll = (e) => {
        const {scrollTop, scrollLeft} = e.target;
        if (listRef.current) {
            const {Grid} = listRef.current;
            Grid.handleScrollEvent({scrollTop, scrollLeft});
            cache.clearAll();
        }
    };

    const renderSpinner = useCallback(() => {
        if (!fetchItems) {
            return;
        }
        return <StyledSpinner>
            <Spinner visible={isFetching}/>
        </StyledSpinner>
    }, [isFetching, fetchItems])

    return <StyledList listHeight={fixedHeight}>
        <InfiniteLoader isRowLoaded={isRowLoaded} loadMoreRows={fetchData} rowCount={items.length + 1}>
            {({onRowsRendered}) => {
                return <div style={{height: fixedHeight}}>
                    <AutoSizer>
                        {({height, width}) => {
                            return <Scrollbars
                                onScroll={handleScroll}
                                style={{height, width}}
                                renderTrackHorizontal={props => <div {...props} style={{display: 'none'}}
                                                                     className="track-horizontal"/>}>
                                <VirtualizedList
                                    ref={listRef}
                                    deferredMeasurementCache={cache}
                                    width={width}
                                    height={height}
                                    style={{overflowX: false, overflowY: false}}
                                    onRowsRendered={onRowsRendered}
                                    rowCount={items.length}
                                    universal={true}
                                    overscanRowCount={0}
                                    rowHeight={cache.rowHeight}
                                    rowRenderer={rowRenderer}
                                    noRowsRenderer={() => <div>Loading...</div>}
                                />
                            </Scrollbars>
                        }}
                    </AutoSizer>
                </div>
            }}
        </InfiniteLoader>
        {renderSpinner()}
    </StyledList>;
}

_List.defaultProps = {
    fixedHeight: 400,
    rowHeight: 50,
    disabled: false,
    items: [],
    dataItemRenderer: null,
    fetchItems: null,
    onItemClick: null,
    isFetching: false
};

export const List = BaseComponent<ListProps>(_List, lightTheme, darkTheme);