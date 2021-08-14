import React, { useCallback, useEffect, useRef, useState } from 'react'
import { SelectProps } from "./Select.types";
import { BaseComponent, BaseComponentProps } from "../../hoc";
import { List } from "../List";
import { Text } from "../Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {
    AnimatedStyledList,
    StyledArrowIcon,
    StyledEmptyDataInfo,
    StyledSelect,
    StyledSelectButton,
    StyledSelectedValueText
} from './style';

import { darkTheme, lightTheme } from "./themes";
import { Portal } from "../Portal";

export const _Select = (props: BaseComponentProps & SelectProps) => {

    const {
        style,
        theme,
        title,
        items,
        fetchItems,
        disabled,
        dataItemRenderer,
        itemValueProvider,
        onChange,
        initialIndex
    } = props;

    const [opened, setOpened] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(initialIndex);
    const [visibleTitle, setVisibleTitle] = useState(null);
    const [animatedHeight, setAnimatedHeight] = useState(0);

    const [portalTopPosition, setPortalTopPosition] = useState(0)
    const [portalLeftPosition, setPortalLeftPosition] = useState(0)

    const ref = useRef(null);

    useEffect(() => {
        onNewIndex(selectedIndex);
    }, [title, selectedIndex, items])

    const updateSize = useCallback(() => {
        if (!ref.current) return;

        const rect = ref.current.getBoundingClientRect();
        const top = rect ? rect.y : 0;
        const left = rect ? rect.x : 0;

        setPortalLeftPosition(left)
        setPortalTopPosition(top);
    }, []);

    const onNewIndex = useCallback(newIndex => {
        console.log('Items:')
        console.log(items);
        console.log('Items length: ' + items.length);
        console.log('new idx: ' + newIndex);
        if (newIndex >= 0 && newIndex <= items.length - 1) {
            setVisibleTitle(itemValueProvider(items[newIndex]));
            onChange?.(newIndex, items[newIndex]);
            setOpened(false);
            setSelectedIndex(newIndex)
        }
        else {
            onChange?.(newIndex, null);
            setVisibleTitle(title);
        }
    }, [title, onChange, itemValueProvider, items]);

    useEffect(() => {
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, [ref]);

    const onSelected = useCallback(newIndex => {
        onNewIndex(newIndex);
    }, []);

    const onAnimationUpdate = useCallback((b) => {
        setAnimatedHeight(b.height)
    }, []);

    const renderItems = useCallback(() => {
        if (!opened || !items || items.length === 0) {
            return;
        }

        if (items.length === 0) {
            return <div className={"noData"}>
                <Text text={'No data'}/>
            </div>
        }

        let targetHeight = 200;
        let rowHeight = 50;

        if (targetHeight > items.length * rowHeight) {
            targetHeight = items.length * rowHeight;
        }

        return <Portal onClickOutside={() => setOpened(false)}>
            <AnimatedStyledList
                style={{top: portalTopPosition + 50, left: portalLeftPosition}}
                initial={{height: 0, opacity: 0}}
                animate={{height: [0, targetHeight], opacity: [0, 1]}}
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
        </Portal>

    }, [opened, items, animatedHeight, portalLeftPosition, portalTopPosition]);

    const renderEmptyDataInfo = useCallback(() => {
        if (!opened || items.length > 0) {
            return;
        }

        return <Portal onClickOutside={() => setOpened(false)}>
            <AnimatedStyledList
                style={{top: portalTopPosition + 50, left: portalLeftPosition}}
                initial={{height: 0, opacity: 0}}
                animate={{height: [0, 100], opacity: [0, 1]}} transition={{duration: 0.2}}>
                <StyledEmptyDataInfo>No data</StyledEmptyDataInfo>
            </AnimatedStyledList>
        </Portal>
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
        lineHeight: theme.height,
        fontSize: theme.fontSize
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
    itemValueProvider: dataItem => <div>{dataItem.value}</div>,
    onChange: (index, dataItem) => {},
    initialIndex: 0
}

export const Select = BaseComponent<SelectProps>(_Select, lightTheme, darkTheme);