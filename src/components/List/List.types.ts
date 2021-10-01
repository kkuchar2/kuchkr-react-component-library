export interface ListProps {
    fixedHeight: number;
    rowHeight: number;
    disabled: boolean;
    items: Array<unknown>
    dataItemRenderer: (index, disabled, dataItem) => Element
    fetchItems?: () => void,
    onItemClick?: (index) => void,
    isFetching?: boolean
}

export interface StyledListProps {
    readonly listHeight?: number;
    readonly disabled?: boolean;
}

export const styledListDefaultProps = {
    listHeight: 400,
    disabled: false
}