import {Switch as SwitchComponent} from './Switch';
import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyledContainer
} from "../../util/BaseComponentStory";
import React, {useCallback, useState} from "react";

export default generateStoryOptions(SwitchComponent);

const Component1 = (args) => <SwitchComponent {...args} />;

Component1.displayName = SwitchComponent.displayName;

export const Switch = (args) => {

    const [isOn, setIsOn] = useState(true);

    const onChange = useCallback((v) => {
        setIsOn(v);
    }, []);

    return <StyledContainer>
        <DarkModeContainer padding={"50px"}>
            <div>{`Is on: ${isOn}`}</div>
            <Component1 {...args} isOn={isOn} onChange={onChange} theme={SwitchComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer padding={"50px"}>
            <Component1 {...args} isOn={isOn} onChange={onChange} theme={SwitchComponent.lightTheme}/>
        </LightModeContainer>
    </StyledContainer>
}

Switch.args = SwitchComponent.defaultProps
Switch.argTypes = defaultArgTypes;