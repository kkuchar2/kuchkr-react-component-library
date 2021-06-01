type OnItemClickFunc = (v) => any;

export interface ListItemProps {
    className: string;
    index: number;
    children: unknown | Array<unknown>;
    style: object;
    onClick: OnItemClickFunc
}

export const defaultProps: ListItemProps = {
    className: null,
    index: 0,
    children: [],
    style: {},
    onClick: v => {}
}