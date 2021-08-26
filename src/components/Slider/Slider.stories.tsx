import {Slider as SliderComponent} from './Slider';
import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyleContainer
} from "../../util/BaseComponentStory";
import React, {useState} from "react";
import {modernDarkTheme, modernLightTheme} from "./themes";
import {Text} from "../Text";

export default generateStoryOptions(SliderComponent);

const Component = (args) => <SliderComponent {...args} />;

Component.displayName = SliderComponent.displayName;

export const Slider = (args) => {

    const [markValues,] = useState([25, 75]);
    const [currentValue, setCurrentValue] = useState(20);

    return <StyleContainer>
        <DarkModeContainer height={"400px"} padding={"30px"}>
            <Component {...args} value={currentValue} markValues={markValues} onChange={setCurrentValue}
                       theme={SliderComponent.darkTheme}/>
            <Text style={{marginTop: 50, color: '#337dff'}} text={`Value: ${currentValue.toString()}`}/>
            <Component {...args} value={currentValue} markValues={markValues} style={{marginTop: 50}}
                       onChange={setCurrentValue} innerModernSlider={true} theme={modernDarkTheme}/>
        </DarkModeContainer>

        <LightModeContainer height={"400px"} padding={"30px"}>
            <Component {...args} value={currentValue} markValues={markValues} onChange={setCurrentValue}
                       theme={SliderComponent.lightTheme}/>
            <Text style={{marginTop: 50, color: '#337dff'}} text={`Value: ${currentValue.toString()}`}/>
            <Component {...args} value={currentValue} markValues={markValues} style={{marginTop: 50}}
                       onChange={setCurrentValue} innerModernSlider={true} theme={modernLightTheme}/>
        </LightModeContainer>
    </StyleContainer>
}

Slider.args = SliderComponent.defaultProps
Slider.argTypes = defaultArgTypes;