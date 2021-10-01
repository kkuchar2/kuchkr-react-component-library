import {List as ListComponent} from './List';
import {v4 as uuidv4} from 'uuid';

import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyleContainer
} from "../../util/BaseComponentStory";
import React, {useCallback, useState} from "react";
import {name} from 'faker'
import {Text} from "../Text";

export default generateStoryOptions(ListComponent);

const Component1 = (args) => <ListComponent {...args} />;

Component1.displayName = ListComponent.displayName;

const staticItems = Array.from({length: 50}).map(() => ({
    value: name.findName()
}));

const getRandomHeight = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min + "px";
}

const staticHeights = Array.from({length: 50}).map(() => getRandomHeight(30, 200));

export const StaticList = (args) => {

    const provideItem = useCallback((index, disabled, dataItem) => {
        return <div style={{
            border: '1px solid green',
            height: staticHeights[index],
            display: 'flex',
            justifyContent: 'flex',
            alignItems: 'flex-start',
            boxSizing: 'border-box'
        }}>
            <Text theme={{ fontSize: "1.2em" }} text={dataItem.value}/>
        </div>
    }, []);

    return <StyleContainer>
        <DarkModeContainer>
            <Component1 {...args} items={staticItems} dataItemRenderer={provideItem} theme={ListComponent.darkTheme}/>
        </DarkModeContainer>
    </StyleContainer>
}

StaticList.args = ListComponent.defaultProps
StaticList.argTypes = defaultArgTypes;

export const ListWithInfiniteScroll = () => {

    const [items1, setItems1] = useState([]);
    const [fetching1, setFetching1] = useState(true);

    const [items2, setItems2] = useState([]);
    const [fetching2, setFetching2] = useState(true);

    const fetch1 = useCallback(() => {
        setFetching1(true);

        setTimeout(() => {
            const fetchedItems = Array.from({length: 5}).map(() => ({
                value: name.findName()
            }));

            setFetching1(false);
            setItems1(items1.concat(fetchedItems));
        }, 100);
    }, [items1]);

    const fetch2 = useCallback(() => {
        setFetching2(true);

        setTimeout(() => {
            const fetchedItems = Array.from({length: 5}).map(() => ({
                value: name.findName()
            }));

            setFetching2(false);
            setItems2(items2.concat(fetchedItems));
        }, 100);
    }, [items2]);

    const provideItem = useCallback((index, disabled, dataItem) => {
        return <div style={{
            border: '1px solid green',
            height: 20,
            display: 'flex',
            justifyContent: 'flex',
            alignItems: 'flex-start'
        }}>
            <Text theme={{ fontSize: "1.2em" }} text={dataItem.value}/>
        </div>
    }, []);

    return <StyleContainer>
        <DarkModeContainer height={"800px"}>
            <Component1 items={items1}
                        fetchItems={fetch1}
                        isFetching={fetching1}
                        dataItemRenderer={provideItem}
                        theme={ListComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer>
            <Component1 items={items2}
                        fetchItems={fetch2}
                        isFetching={fetching1}
                        dataItemRenderer={provideItem}
                        theme={ListComponent.darkTheme}/>
        </LightModeContainer>
    </StyleContainer>
}

ListWithInfiniteScroll.args = ListComponent.defaultProps
ListWithInfiniteScroll.argTypes = defaultArgTypes;