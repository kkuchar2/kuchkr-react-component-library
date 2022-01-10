import {List as ListComponent} from './List';

import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyledContainer
} from "../../util/BaseComponentStory";
import React, {useCallback, useState} from "react";
import {Text} from "../Text";
import Chance from 'chance';

export default generateStoryOptions(ListComponent);

const Component1 = (args) => <ListComponent {...args} />;

let chance = new Chance()

Component1.displayName = ListComponent.displayName;

const staticItems = Array.from({length: 50}).map(() => ({
    value: chance.name()
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
            height: staticHeights[index],
            display: 'flex',
            justifyContent: 'flex',
            alignItems: 'flex-start',
            boxSizing: 'border-box'
        }}>
            <Text theme={{fontSize: "1.2em"}} text={dataItem.value}/>
        </div>
    }, []);

    return <StyledContainer>
        <DarkModeContainer>
            <Component1 {...args} items={staticItems} dataItemRenderer={provideItem} theme={ListComponent.darkTheme}/>
        </DarkModeContainer>
    </StyledContainer>
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
                value: chance.name()
            }));

            setFetching1(false);
            setItems1(items1.concat(fetchedItems));
        }, 100);
    }, [items1]);

    const fetch2 = useCallback(() => {
        setFetching2(true);

        setTimeout(() => {
            const fetchedItems = Array.from({length: 5}).map(() => ({
                value: chance.name()
            }));

            setFetching2(false);
            setItems2(items2.concat(fetchedItems));
        }, 100);
    }, [items2]);

    const provideItem = useCallback((index, disabled, dataItem) => {
        return <div style={{
            height: 20,
            display: 'flex',
            justifyContent: 'flex',
            alignItems: 'flex-start'
        }}>
            <Text theme={{fontSize: "1.2em"}} text={dataItem.value}/>
        </div>
    }, []);

    return <StyledContainer>
        <DarkModeContainer>
            <Component1 items={items1}
                        fetchItems={fetch1}
                        isFetching={fetching1}
                        dataItemRenderer={provideItem}
                        theme={ListComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer>
            <Component1 items={items2}
                        fetchItems={fetch2}
                        isFetching={fetching2}
                        dataItemRenderer={provideItem}
                        theme={ListComponent.lightTheme}/>
        </LightModeContainer>
    </StyledContainer>
}

ListWithInfiniteScroll.args = ListComponent.defaultProps
ListWithInfiniteScroll.argTypes = defaultArgTypes;