import { Slider as SliderComponent } from './Slider';
import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyleContainer
} from "../../util/BaseComponentStory";
import React, { useState } from "react";
import {modernDarkTheme, modernLightTheme} from "./themes";

export default generateStoryOptions(SliderComponent);

const Component = (args) => <SliderComponent {...args} />;

Component.displayName = SliderComponent.displayName;

export const Slider = (args) => {

    const [markValues, ] = useState([25, 75]);

    return <StyleContainer>
        <DarkModeContainer height={"400px"}>
            <Component {...args} markValues={markValues} theme={SliderComponent.darkTheme}/>
            <Component {...args} markValues={markValues} style={{marginTop: 150}} innerModernSlider={true} theme={modernDarkTheme}/>
        </DarkModeContainer>

        <LightModeContainer height={"400px"}>
            <Component {...args} markValues={markValues} theme={SliderComponent.lightTheme}/>
            <Component {...args} markValues={markValues} style={{marginTop: 150}} innerModernSlider={true} theme={modernLightTheme}/>
        </LightModeContainer>
    </StyleContainer>
}

Slider.args = SliderComponent.defaultProps
Slider.argTypes = defaultArgTypes;