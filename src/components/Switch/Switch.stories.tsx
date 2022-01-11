import {Switch as SwitchComponent} from './Switch';
import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyledContainer
} from "../../util/BaseComponentStory";
import React, {useCallback, useState} from "react";
import {Text} from '../Text';

export default generateStoryOptions(SwitchComponent);

const Component1 = (args) => <SwitchComponent {...args} />;

Component1.displayName = SwitchComponent.displayName;

const smallTitleTheme = {
    textColor: "#d0d0d0",
    disabledTextColor: "#9e9e9e",
    fontSize: "15px",
    hoverColor: '#d0d0d0',
    margin: "10px 0px 20px 0px",
    maxWidth: '300px',
    maxHeight: '300px',
    textAlign: 'left'
}

let t;

export const Switch = (args) => {

    const [isOn, setIsOn] = useState(true);

    const onChange = useCallback((v) => {
        setIsOn(v);
    }, []);

    return <StyledContainer>
        <DarkModeContainer padding={"50px"}>
            <Text theme={smallTitleTheme} text={`Is on: ${isOn}`}/>
            <Component1 {...args} isOn={isOn} onChange={onChange} theme={SwitchComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer padding={"50px"}>
            <Component1 {...args} isOn={isOn} onChange={onChange} theme={SwitchComponent.lightTheme}/>
        </LightModeContainer>
    </StyledContainer>
}

Switch.args = SwitchComponent.defaultProps
Switch.argTypes = defaultArgTypes;