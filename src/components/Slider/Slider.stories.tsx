import { Slider as SliderComponent } from './Slider';
import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyleContainer
} from "../../util/BaseComponentStory";
import React, { useCallback, useState } from "react";
import { Input } from "../Input";

export default generateStoryOptions(SliderComponent);

const Component = (args) => <SliderComponent {...args} />;

Component.displayName = SliderComponent.displayName;

export const Slider = (args) => {

    const [markValues, ] = useState([25, 75]);

    return <StyleContainer>
        <DarkModeContainer height={"200px"}>
            <Component {...args} markValues={markValues} theme={SliderComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer height={"200px"}>
            <Component {...args} markValues={markValues} theme={SliderComponent.lightTheme}/>
        </LightModeContainer>
    </StyleContainer>
}

Slider.args = SliderComponent.defaultProps
Slider.argTypes = defaultArgTypes;

export const SliderWithControlledValueFromOtherComponent = (args) => {

    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [markValues, ] = useState([25, 75]);

    const onSliderChange1 = useCallback((v) => setValue1(v), [])
    const onSliderChange2 = useCallback((v) => setValue2(v), [])

    const onInputChange1 = useCallback((text) => {
        if (!isNaN(text)) {
            setValue1(parseInt(text))
        }
    }, [])


    const onInputChange2 = useCallback((text) => {
        if (!isNaN(text)) {
            setValue2(parseInt(text))
        }
    }, [])

    return <StyleContainer>
        <DarkModeContainer height={"200px"}>
            <div style={{display: 'flex'}}>
                <div style={{marginRight: 50}}>
                    <Input theme={Input.darkTheme} value={value1.toString()} onChange={onInputChange1}/>
                </div>
                <Component {...args} value={value1} onChange={onSliderChange1} markValues={markValues} theme={SliderComponent.darkTheme}/>
            </div>
        </DarkModeContainer>

        <LightModeContainer height={"200px"}>
            <div style={{display: 'flex'}}>
                <div style={{marginRight: 50}}>
                    <Input theme={Input.lightTheme} value={value2.toString()} onChange={onInputChange2}/>
                </div>
                <Component {...args} value={value2} onChange={onSliderChange2} markValues={markValues} theme={SliderComponent.lightTheme}/>
            </div>
        </LightModeContainer>
    </StyleContainer>
}

SliderWithControlledValueFromOtherComponent.args = SliderComponent.defaultProps
SliderWithControlledValueFromOtherComponent.argTypes = defaultArgTypes;