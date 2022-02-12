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

export default generateStoryOptions(InputComponent);

const Component1 = (args) => <InputComponent {...args} />;

Component1.displayName = InputComponent.displayName;

export const InputStory = (args) => {

    const [firstName, setFirstName] = useState("Krzysztof");
    const [lastName, setLastName] = useState("Kucharski");
    const [email, setEmail] = useState("dummy@mail.com");

    const [longText, setLongText] = useState('');

    const onFirstNameChange = useCallback((e) => {
        console.log('First name changed to:', e.target.value);
        setFirstName(e.target.value);
    }, []);

    const onLastNameChange = useCallback((e) => {
        console.log('Last name changed to:', e.target.value);
        setLastName(e.target.value);
    }, []);

    const onEmailChange = useCallback((e) => {
        console.log('Email changed to:', e.target.value);
        setEmail(e.target.value);
    }, []);

    const onLongTextChange = useCallback((e) => {
        console.log('Long text changed to:', e.target.value);
        setLongText(e.target.value);
    }, []);

    return <StyledContainer>
        <DarkModeContainer padding={"50px"}>
            <Component1 {...args}
                        theme={InputComponent.darkTheme}
                        placeholder={'Enter First Name'}
                        style={{marginTop: 30}}
                        value={firstName}
                        type={"text"}
                        onChange={onFirstNameChange}
                        autoComplete={'off'}
                        id={"exampleInputFirst"}
                        title={''}/>
            <Component1 {...args}
                        theme={InputComponent.darkTheme}
                        placeholder={'Enter Last Name'}
                        style={{marginTop: 30}}
                        type={"text"}
                        value={lastName}
                        onChange={onLastNameChange}
                        id={"exampleInputLast"}
                        title={''}/>
            <Component1 {...args}
                        theme={InputComponent.darkTheme}
                        placeholder={'Enter E-mail'}
                        style={{marginTop: 30}}
                        value={email}
                        onChange={onEmailChange}
                        type={"email"}
                        id="exampleInputEmail"
                        title={''}/>
        </DarkModeContainer>

        <LightModeContainer padding={"20px"}>
            <Component1 {...args}
                        type="text"
                        title="Enter correct value (min 5 characters):"
                        minLength={5}
                        value={longText}
                        onChange={onLongTextChange}
                        theme={withIconTestTheme}
                        withIcon={true}
                        required={true}/>
        </LightModeContainer>
    </StyledContainer>
}

InputStory.args = InputComponent.defaultProps
InputStory.argTypes = defaultArgTypes;