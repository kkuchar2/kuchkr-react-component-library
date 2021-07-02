import { List as ListComponent } from './List';
import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyleContainer
} from "../../util/BaseComponentStory";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { name } from 'faker'

export default generateStoryOptions(ListComponent);

const Component1 = (args) => <ListComponent {...args} />;

Component1.displayName = ListComponent.displayName;

const staticItems = Array.from({length: 5}).map(() => ({
    value: name.findName()
}));

export const StaticList = (args) => {

    return <StyleContainer>
        <DarkModeContainer>
            <Component1 {...args}
                       items={staticItems}
                       dataItemRenderer={item => item.value}
                       theme={ListComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer>
            <Component1 {...args}
                       items={staticItems}
                       dataItemRenderer={item => item.value}
                       theme={ListComponent.lightTheme}/>
        </LightModeContainer>
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
        }, 200);
    }, [items1]);

    const fetch2 = useCallback(() => {
        setFetching2(true);

        setTimeout(() => {
            const fetchedItems = Array.from({length: 5}).map(() => ({
                value: name.findName()
            }));

            setFetching2(false);
            setItems2(items2.concat(fetchedItems));
        }, 200);
    }, [items2]);

    return <StyleContainer>
        <DarkModeContainer>
            <ListComponent items={items1}
                       fetchItems={fetch1}
                       isFetching={fetching1}
                       dataItemRenderer={item => item.value}
                       theme={ListComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer>
            <ListComponent items={items2}
                       fetchItems={fetch2}
                       isFetching={fetching2}
                       dataItemRenderer={item => item.value}
                       theme={ListComponent.lightTheme}/>
        </LightModeContainer>
    </StyleContainer>
}

ListWithInfiniteScroll.args = ListComponent.defaultProps
ListWithInfiniteScroll.argTypes = defaultArgTypes;