import {Input as InputComponent} from './Input';
import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyledContainer
} from "../../util/BaseComponentStory";
import React, {useCallback, useState} from "react";
import {withIconTestTheme} from "./themes";
import {Text} from "../Text";

export default generateStoryOptions(InputComponent);

const Component1 = (args) => <InputComponent {...args} />;

Component1.displayName = InputComponent.displayName;

export const InputStory = (args) => {

    const [value, setValue] = useState("");

    const changeValue = useCallback((v) => {
        console.log('Setting value: ' + v);
        setValue(v);
    }, []);

    return <StyledContainer>
        <DarkModeContainer padding={"50px"}>
            <Component1 {...args} value={value} theme={InputComponent.darkTheme} onChange={changeValue}/>
        </DarkModeContainer>

        <DarkModeContainer padding={"50px"}>
            <Text theme={Text.darkTheme} text={'Form with autocomplete'}/>
            <Component1 {...args}
                        theme={InputComponent.darkTheme}
                        placeholder={'Enter First Name'}
                        style={{marginTop: 30}}
                        type={"text"}
                        autoComplete={'off'}
                        id={"exampleInputFirst"}
                        title={''}/>
            <Component1 {...args}
                        theme={InputComponent.darkTheme}
                        placeholder={'Enter Last Name'}
                        style={{marginTop: 30}}
                        type={"text"}
                        id={"exampleInputLast"}
                        title={''}/>
            <Component1 {...args}
                        theme={InputComponent.darkTheme}
                        placeholder={'Enter E-mail'}
                        style={{marginTop: 30}}
                        type={"email"}
                        id="exampleInputEmail"
                        title={''}/>
        </DarkModeContainer>

        <LightModeContainer padding={"50px"}>
            <Component1 {...args} type="text" minLength={5} theme={withIconTestTheme} withIcon={true} required={true}/>
        </LightModeContainer>

        <LightModeContainer padding={"50px"}>
            <Component1 {...args} theme={InputComponent.lightTheme}/>
        </LightModeContainer>
    </StyledContainer>
}

InputStory.args = InputComponent.defaultProps
InputStory.argTypes = defaultArgTypes;