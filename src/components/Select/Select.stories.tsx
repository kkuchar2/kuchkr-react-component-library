import React, {useCallback} from "react";
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
    return <StyleContainer>
        <DarkModeContainer height={"200px"} alignItems={"center"} padding={"20px"}>
            <Component {...args} dataTestId={'select_test_id1'} triggerOnDefault options={staticItems} defaultValue={staticItems[0]}
                       theme={SelectComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer height={"200px"} alignItems={"center"} padding={"20px"}>
            <Component {...args} options={staticItems} defaultValue={staticItems[0]}
                       theme={SelectComponent.lightTheme}/>
        </LightModeContainer>
    </StyleContainer>
}

Select.args = SelectComponent.defaultProps
Select.argTypes = defaultArgTypes;