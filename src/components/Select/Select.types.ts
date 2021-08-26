export interface SelectProps {
    placeholder?: string;
    options?: Array<unknown>
    isSearchable?: boolean,
    onChange?: (index, dataItem) => void,
}

export interface StyledSelectProps {}

export const styledSelectDefaultProps = {}