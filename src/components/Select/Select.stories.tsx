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

const staticItems = Array.from({length: 10}).map(() => {
    return {value: name.findName(), label: name.findName()};
});

export const Select = (args) => {


    const onChange = useCallback((v) => {
        console.log('On change: ', v)
    }, []);


    return <StyleContainer>
        <DarkModeContainer height={"300px"} alignItems={"center"} padding={"20px"}>
            <Component {...args} onChange={onChange} triggerOnDefault options={staticItems} defaultValue={staticItems[0]}
                       theme={SelectComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer height={"800px"} alignItems={"center"} padding={"20px"}>
            <Component {...args} onChange={onChange} options={staticItems} defaultValue={staticItems[0]}
                       theme={SelectComponent.lightTheme}/>
        </LightModeContainer>
    </StyleContainer>
}

Select.args = SelectComponent.defaultProps
Select.argTypes = defaultArgTypes;