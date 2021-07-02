import { Slider as SliderComponent } from './Slider';
import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyleContainer
} from "../../util/BaseComponentStory";
import React from "react";
import { name } from 'faker'

export default generateStoryOptions(SliderComponent);

const Component = (args) => <SliderComponent {...args} />;

Component.displayName = SliderComponent.displayName;

export const Slider = (args) => {

    return <StyleContainer>
        <DarkModeContainer height={"200px"}>
            <Component {...args} theme={SliderComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer height={"200px"}>
            <Component {...args} theme={SliderComponent.lightTheme}/>
        </LightModeContainer>
    </StyleContainer>
}

Slider.args = SliderComponent.defaultProps
Slider.argTypes = defaultArgTypes;