import React, {useCallback, useEffect, useState} from "react";
import {name} from 'faker'
import {Select as SelectComponent} from './Select';
import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyleContainer
} from "../../util/BaseComponentStory";


export default generateStoryOptions(SelectComponent);

const Component = (args) => <SelectComponent {...args} />;

Component.displayName = SelectComponent.displayName;

const staticItems = Array.from({length: 120}).map(() => {
    return {value: name.findName(), label: name.findName()};
});

export const Select = (args) => {

    const [items, setItems] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setItems(staticItems);
        }, 2000);
    }, []);

    return <StyleContainer>
        <DarkModeContainer height={"200px"} alignItems={"center"} padding={"20px"}>
            <Component {...args}
                       dataTestId={'select_test_id1'}
                       disabled={false}
                       triggerOnDefault
                       options={items}
                       selectFirstAfterLoad={true}
                       emptyPlaceholder={"No items loaded yet"}
                       theme={SelectComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer height={"200px"} alignItems={"center"} padding={"20px"}>
            <Component {...args}
                       options={items}
                       selectFirstAfterLoad={true}
                       emptyPlaceholder={"No items loaded yet"}
                       theme={SelectComponent.lightTheme}/>
        </LightModeContainer>
    </StyleContainer>
}

Select.args = SelectComponent.defaultProps
Select.argTypes = defaultArgTypes;