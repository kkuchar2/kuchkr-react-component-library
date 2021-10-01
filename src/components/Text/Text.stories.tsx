import React from "react";
import {lorem} from 'faker'
import {Text as TextComponent} from './Text';
import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyleContainer
} from "../../util/BaseComponentStory";


export default generateStoryOptions(TextComponent);

const Component = (args) => <TextComponent {...args} />;

Component.displayName = TextComponent.displayName;

export const Text = (args) => {
    return <StyleContainer>
        <DarkModeContainer height={"400px"} alignItems={"center"} padding={"20px"}>
            <Component text={lorem.paragraph()} theme={TextComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer height={"400px"} alignItems={"center"} padding={"20px"}>
            <Component text={lorem.paragraph()} theme={TextComponent.lightTheme}/>
        </LightModeContainer>
    </StyleContainer>
}

Text.args = TextComponent.defaultProps
Text.argTypes = defaultArgTypes;