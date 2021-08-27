import React from "react";
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

const staticItems = [
    {value: "MergeSort", label: "MergeSort"},
    {value: "BubbleSort", label: "BubbleSort"},
    {value: "InsertionSort", label: "InsertionSort"},
    {value: "QuickSort", label: "QuickSort"}
]

export const Select = (args) => {

    return <StyleContainer>
        <DarkModeContainer height={"300px"} alignItems={"center"} padding={"20px"}>
            <Component {...args} options={staticItems} theme={SelectComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer height={"300px"} alignItems={"center"} padding={"20px"}>
            <Component {...args} options={staticItems} theme={SelectComponent.lightTheme}/>
        </LightModeContainer>
    </StyleContainer>
}

Select.args = SelectComponent.defaultProps
Select.argTypes = defaultArgTypes;