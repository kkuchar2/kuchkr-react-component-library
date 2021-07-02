import React, { useCallback, useEffect, useRef } from 'react';
import { ListProps } from "./List.types";
import { darkTheme, lightTheme } from "./themes";
import { BaseComponent, BaseComponentProps } from "../../hoc";
import { ListItem } from "../ListItem";
import { StyledList } from './style';
import { Spinner } from "../Spinner";
import AutoSizer from 'react-virtualized/dist/commonjs/AutoSizer'
import { InfiniteLoader, List as VirtualizedList } from 'react-virtualized';
import { Scrollbars } from 'react-custom-scrollbars';
import styled from "styled-components";

const StyledSpinner = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  pointer-events: none;
`

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

    useEffect(() => fetchData(), [])

    const fetchData = useCallback((start = 0, stop = 1) => {
        if (fetchItems) {
            fetchItems();
        }
    }, [fetchItems]);

    const itemRenderer = useCallback((index) => {
        return <ListItem index={index} onClick={onItemClick} disabled={disabled} theme={theme.listItemStyle}>
            {dataItemRenderer ? dataItemRenderer(items[index]) : ''}
        </ListItem>
    }, [items, onItemClick, theme]);

    const rowRenderer = useCallback(({key, index, style}) => {
        return (
            <div key={key} style={{...style, display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
                {itemRenderer(index)}
            </div>
        )
    }, [items]);

    const isRowLoaded = ({index}) => !!items[index];

    const handleScroll = (e) => {
        const {scrollTop, scrollLeft} = e.target;
        if (listRef.current) {
            const {Grid} = listRef.current;
            Grid.handleScrollEvent({scrollTop, scrollLeft});
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
                                    renderTrackHorizontal={props => <div {...props} style={{display: 'none'}} className="track-horizontal"/>}>
                                <VirtualizedList
                                    ref={listRef}
                                    width={width}
                                    height={height}
                                    style={{overflowX: false, overflowY: false}}
                                    onRowsRendered={onRowsRendered}
                                    rowCount={items.length}
                                    universal={true}
                                    rowHeight={rowHeight}
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
    fixedHeight: 200,
    rowHeight: 50,
    disabled: false,
    items: [],
    dataItemRenderer: null,
    fetchItems: null,
    onItemClick: null,
    isFetching: false
};

export const List = BaseComponent<ListProps>(_List, lightTheme, darkTheme);