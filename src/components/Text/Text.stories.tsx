import React from "react";
import Chance from 'chance';

import {Text as TextComponent} from './Text';
import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyledContainer
} from "../../util/BaseComponentStory";

export default generateStoryOptions(TextComponent);

const Component = (args) => <TextComponent {...args} />;

Component.displayName = TextComponent.displayName;

const chance = new Chance();

export const Text = (args) => {
    return <StyledContainer>
        <DarkModeContainer height={"400px"} alignItems={"center"} padding={"20px"}>
            <Component text={"Some short text"} theme={TextComponent.darkTheme}/>
            <Component style={{marginTop: 20}} text={chance.paragraph()} theme={TextComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer height={"400px"} alignItems={"center"} padding={"20px"}>
            <Component text={"Some short text"} theme={TextComponent.lightTheme}/>
            <Component style={{marginTop: 20}} text={chance.paragraph()} theme={TextComponent.lightTheme}/>
        </LightModeContainer>
    </StyledContainer>
}

Text.args = TextComponent.defaultProps
Text.argTypes = defaultArgTypes;