import React, {useState, useEffect, useCallback, useRef} from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Text from "../Text";
import {SelectProps} from "./Select.types";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import List from "../List";
import {useOnClickOutside} from '../../hooks/useOnClickOutside'
import './Select.scss'

function Select(props: SelectProps) {

    const {className, title, items, fetchItems, itemRenderer} = props;
    const [hasMore, setHasMore] = useState(true)
    const [opened, setOpened] = useState(false);
    const [selectedIndex, setSelectedIndex] = useState(-1);
    const [visibleTitle, setVisibleTitle] = useState('');

    const ref = useRef();

    useEffect(() => {
        if (items.length >= 10000) {
            setHasMore(false)
        }
    }, [items.length])

    useEffect(() => {
        if (selectedIndex < 0) {
            setVisibleTitle(title);
        } else {
            setVisibleTitle(items[selectedIndex]['title']);
        }
    }, [title, selectedIndex, items])

    useOnClickOutside(ref, () => setOpened(false));

    const onSelected = useCallback((v) => {
        setSelectedIndex(v);
        setOpened(false);
    }, []);

    const renderItems = useCallback(() => {
        if (!opened) {
            return;
        }

        if (items.length === 0) {
            return <div className={"noData"}>
                <Text text={'No data'}/>
            </div>
        }

        return <List
            height={400}
            items={items}
            onItemClick={onSelected}
            fetchItems={fetchItems}
            dataItemRenderer={item => <div>{item.title}</div>}/>

    }, [opened, items, hasMore]);

    const onClick = useCallback(() => setOpened(!opened), [opened])

    return <div ref={ref} className={"select"}>
        <div onClick={onClick} className="select-control-button">
            <div className="selected-value">
                <Text text={visibleTitle}/>
            </div>
            <div className={"arrowDown"}>
                <FontAwesomeIcon icon={faChevronDown}/>
            </div>
        </div>
        {renderItems()}
    </div>;
}

export default Select