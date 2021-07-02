import { Select as SelectComponent } from './Select';
import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyleContainer
} from "../../util/BaseComponentStory";
import React from "react";
import { name } from 'faker'

export default generateStoryOptions(SelectComponent);

const Component = (args) => <SelectComponent {...args} />;

Component.displayName = SelectComponent.displayName;

const staticItems = Array.from({length: 5}).map(() => ({
    value: name.findName()
}));

export const EmptySelect = (args) => {

    return <StyleContainer>
        <DarkModeContainer height={"200px"} alignItems={"flex-start"} padding={"20px"}>
            <Component {...args} dataItemRenderer={item => <div>{item.value}</div>} theme={SelectComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer height={"200px"} alignItems={"flex-start"} padding={"20px"}>
            <Component {...args} dataItemRenderer={item => <div>{item.value}</div>} theme={SelectComponent.lightTheme}/>
        </LightModeContainer>
    </StyleContainer>
}

EmptySelect.args = SelectComponent.defaultProps
EmptySelect.argTypes = defaultArgTypes;

export const SelectWithItems = (args) => {

    return <StyleContainer>
        <DarkModeContainer height={"300px"} alignItems={"flex-start"} padding={"20px"}>
            <Component {...args} dataItemRenderer={item => <div>{item.value}</div>} items={staticItems} theme={SelectComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer height={"300px"} alignItems={"flex-start"} padding={"20px"}>
            <Component {...args} dataItemRenderer={item => <div>{item.value}</div>} items={staticItems} theme={SelectComponent.lightTheme}/>
        </LightModeContainer>
    </StyleContainer>
}

SelectWithItems.args = SelectComponent.defaultProps
SelectWithItems.argTypes = defaultArgTypes;