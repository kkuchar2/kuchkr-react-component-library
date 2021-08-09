import { ReactElement } from "react";

type FetchingFunc = () => any;

export interface SelectProps {
    title?: string;
    items?: Array<unknown>
    fetchItems?: FetchingFunc,
    dataItemRenderer: (dataItem) => ReactElement,
    itemValueProvider?: (dataItem) => ReactElement,
    onChange?: (index, dataItem) => void,
    selectFirst?: boolean
}

export interface StyledSelectProps {}

export interface StyledSelectButtonProps {
    readonly disabled?: boolean;
}

export interface StyledArrowIconProps {
    readonly disabled?: boolean;
}

export interface StyledSelectedValueTextProps {}

export interface StyledEmptyDataInfoProps {}

export const styledSelectDefaultProps = {}

export const styledSelectButtonDefaultProps = {
    disabled: false
};

export const styledArrowIconDefaultProps = {
    disabled: false
}

export const styledSelectedValueTextDefaultProps = {};

export const styledEmptyDataInfoDefaultProps = {};