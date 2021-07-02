import { ReactElement } from "react";

export interface ListProps {
    fixedHeight: number;
    rowHeight: number;
    disabled: boolean;
    items: Array<unknown>
    dataItemRenderer: (dataItem) => ReactElement
    fetchItems?: () => void,
    onItemClick?: (index) => void,
    isFetching?: boolean
}

export interface StyledListProps {
    readonly listHeight?: number;
    readonly disabled?: boolean;
}

export const styledListDefaultProps = {
    listHeight: 200,
    disabled: false
}