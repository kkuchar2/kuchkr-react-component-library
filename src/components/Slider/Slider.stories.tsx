import {Slider as SliderComponent} from './Slider';
import {DarkModeContainer, defaultArgTypes, generateStoryOptions, StyledContainer} from "../../util/BaseComponentStory";
import React, {useCallback, useState} from "react";
import {modernDarkTheme} from "./themes";

export default generateStoryOptions(SliderComponent);

const Component = (args) => <SliderComponent {...args} />;

Component.displayName = SliderComponent.displayName;

export const Slider = (args) => {

    const [markValues,] = useState([25, 75]);
    const [currentValue, setCurrentValue] = useState(20);

    const onChange = useCallback((event: React.ChangeEvent<{}>, value: number) => {
        setCurrentValue(value);
    }, []);

    return <StyledContainer>
        <DarkModeContainer height={"200px"} padding={"30px"}>
            <Component {...args}
                       value={currentValue}
                       markValues={markValues}
                       onChange={onChange}
                       theme={SliderComponent.darkTheme}/>

            <div style={{ marginTop: 50, color: '#337dff' }}>{`Value: ${currentValue.toString()}`}</div>
            
            <Component {...args}
                       value={currentValue}
                       markValues={markValues}
                       style={{ marginTop: 50 }}
                       onChange={onChange}
                       innerModernSlider={true}
                       theme={modernDarkTheme}/>
        </DarkModeContainer>
    </StyledContainer>
}

Slider.args = SliderComponent.defaultProps
Slider.argTypes = defaultArgTypes;