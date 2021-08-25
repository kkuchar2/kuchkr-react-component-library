import React from "react";
import { name } from 'faker'
import { Select as SelectComponent } from './Select';
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

const staticItems = Array.from({length: 3}).map(() => ({
    value: name.findName()
}));

export const Select = (args) => {

    return <StyleContainer>
        <DarkModeContainer height={"300px"} alignItems={"flex-start"} padding={"20px"}>
            <Component {...args} dataItemRenderer={item => <div>{item.value}</div>} items={staticItems} theme={SelectComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer height={"300px"} alignItems={"flex-start"} padding={"20px"}>
            <Component {...args} dataItemRenderer={item => <div>{item.value}</div>} items={staticItems} theme={SelectComponent.lightTheme}/>
        </LightModeContainer>
    </StyleContainer>
}

Select.args = SelectComponent.defaultProps
Select.argTypes = defaultArgTypes;