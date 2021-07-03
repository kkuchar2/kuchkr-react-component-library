import React, { useCallback, useEffect, useRef, useState } from 'react'
import { SelectProps } from "./Select.types";
import { BaseComponent, BaseComponentProps } from "../../hoc";
import { List } from "../List";
import { Text } from "../Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { useOnClickOutside } from '../../hoc/useOnClickOutside'
import {
    AnimatedStyledList,
    StyledArrowIcon,
    StyledEmptyDataInfo,
    StyledSelect,
    StyledSelectButton,
    StyledSelectedValueText
} from './style';
import { darkTheme, lightTheme } from "./themes";

export const _Select = (props: BaseComponentProps & SelectProps) => {

    const {style, theme, title, items, fetchItems, disabled, dataItemRenderer, itemValueProvider} = props;

    const [opened, setOpened] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [visibleTitle, setVisibleTitle] = useState(null);
    const [animatedHeight, setAnimatedHeight] = useState(0);

    const ref = useRef();

    // Support clicking outside this component
    useOnClickOutside(ref, () => setOpened(false));

    useEffect(() => {
        if (selectedIndex < 0) {
            setVisibleTitle(title);
        } else {
            setVisibleTitle(itemValueProvider(items[selectedIndex]));
        }
    }, [title, selectedIndex, items])


    const onSelected = useCallback((v) => {
        setSelectedIndex(v);
        setOpened(false);
    }, []);

    const onAnimationUpdate = (b) => {
        setAnimatedHeight(b.height)
    }

    const renderItems = useCallback(() => {
        if (!opened || !items || items.length === 0) {
            return;
        }

        if (items.length === 0) {
            return <div className={"noData"}>
                <Text text={'No data'}/>
            </div>
        }

        return <AnimatedStyledList
            initial={{height: 0, opacity: 0}}
            animate={{height: [0, 200], opacity: [0, 1]}}
            onUpdate={onAnimationUpdate}
            transition={{duration: 0.2}}>
            <List
                fixedHeight={animatedHeight}
                items={items}
                theme={theme.listStyle}
                onItemClick={onSelected}
                fetchItems={fetchItems}
                dataItemRenderer={dataItemRenderer}/>
        </AnimatedStyledList>

    }, [opened, items, animatedHeight]);

    const renderEmptyDataInfo = useCallback(() => {
        if (!opened  || items.length > 0) {
            return;
        }

        return <AnimatedStyledList
            initial={{height: 0, opacity: 0}}
            animate={{height: [0, 100], opacity: [0, 1]}} transition={{duration: 0.2}}>
            <StyledEmptyDataInfo>No data</StyledEmptyDataInfo>
        </AnimatedStyledList>
    }, [opened, items])

    const onClick = useCallback(() => {
        if (disabled) {
            return;
        }
        setOpened(!opened)
    }, [items, opened, disabled])

    const selectedValueTheme = {
        textColor: theme.textColor,
        disabledTextColor: theme.disabledTextColor,
        lineHeight: theme.height
    }

    return <StyledSelect ref={ref} style={style} className={"select"}>
        <StyledSelectButton disabled={disabled} onClick={onClick}>
            <StyledSelectedValueText>
                <Text text={visibleTitle} theme={selectedValueTheme} disabled={disabled}/>
            </StyledSelectedValueText>
            <StyledArrowIcon disabled={disabled}>
                <FontAwesomeIcon icon={faChevronDown}/>
            </StyledArrowIcon>
        </StyledSelectButton>
        {renderEmptyDataInfo()}
        {renderItems()}
    </StyledSelect>
}

_Select.defaultProps = {
    title: 'Select value',
    items: [],
    fetchItems: null,
    dataItemRenderer: null,
    itemValueProvider: dataItem => <div>{dataItem.value}</div>
}

export const Select = BaseComponent<SelectProps>(_Select, lightTheme, darkTheme);