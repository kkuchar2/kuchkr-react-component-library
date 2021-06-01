type FetchingFunc = (start, stop) => any;
type DataItemRenderer = (item) => any;
type OnItemClickFunc = (v) => any;

export interface ListProps {
    className: string;
    height: number;
    rowHeight: number;
    disabled: boolean;
    items: Array<unknown>
    dataItemRenderer: DataItemRenderer,
    fetchItems?: FetchingFunc,
    onItemClick?: OnItemClickFunc
}

export const defaultProps: ListProps = {
    className: null,
    height: 500,
    rowHeight: 50,
    disabled: false,
    items: [],
    dataItemRenderer: item => null,
    fetchItems: null,
    onItemClick: null
}