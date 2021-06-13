type FetchingFunc = () => any;
type DataItemRenderer = (item) => any

export interface SelectProps {
    className?: string;
    title?: string;
    disabled?: boolean;
    items?: Array<unknown>
    fetchItems?: FetchingFunc,
    itemRenderer?: DataItemRenderer
}

export const defaultProps: SelectProps = {
    className: null,
    title: 'Select value',
    disabled: false,
    items: [],
    fetchItems: () => {},
    itemRenderer: item => null
}