export interface InfiniteScrollProps {
    className?: string;
    fetchItems: (start, stop) => any;
    height: number;
    rowHeight: number;
    disabled: boolean;
    items: Array<unknown>
    itemRenderer: (index) => any
}

export const defaultProps: InfiniteScrollProps = {
    className: null,
    fetchItems: (start, stop) => {},
    height: 400,
    rowHeight: 40,
    disabled: false,
    items: [],
    itemRenderer: (index) => {}
}