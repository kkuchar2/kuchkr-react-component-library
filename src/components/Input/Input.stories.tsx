import { Input as InputComponent } from './Input';
import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyleContainer
} from "../../util/BaseComponentStory";
import React, {useCallback, useState} from "react";
import {withIconTestTheme} from "./themes";

export default generateStoryOptions(InputComponent);

const Component1 = (args) => <InputComponent {...args} />;

Component1.displayName = InputComponent.displayName;

export const InputStory = (args) => {

    const [value, setValue] = useState("A");

    const changeValue = useCallback((v) => {
        console.log('Setting value: ' + v);
        setValue(v);
    }, []);

    return <StyleContainer>
        <DarkModeContainer padding={"50px"}>
            <Component1 {...args} value={value} theme={InputComponent.darkTheme} onChange={changeValue}/>
        </DarkModeContainer>

        <LightModeContainer padding={"50px"}>
            <Component1 {...args} theme={withIconTestTheme} withIcon={true}/>
        </LightModeContainer>

        <LightModeContainer padding={"50px"}>
            <Component1 {...args} theme={InputComponent.lightTheme}/>
        </LightModeContainer>
    </StyleContainer>
}

InputStory.args = InputComponent.defaultProps
InputStory.argTypes = defaultArgTypes;