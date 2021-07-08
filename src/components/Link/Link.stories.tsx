import { Link as LinkComponent } from './Link';
import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyleContainer
} from "../../util/BaseComponentStory";
import React from "react";
import { MemoryRouter } from 'react-router-dom';


export default generateStoryOptions(LinkComponent);

const Component = (args) => <LinkComponent {...args} />;

Component.displayName = LinkComponent.displayName;

export const Link = (args) => {

    return <MemoryRouter>
        <StyleContainer>
            <DarkModeContainer height={"100px"} alignItems={"center"} padding={"20px"}>
                <Component {...args} dataItemRenderer={item => <div>{item.value}</div>}
                           theme={LinkComponent.darkTheme}>
                    https://www.facebook.com
                </Component>
            </DarkModeContainer>

            <LightModeContainer height={"100px"} alignItems={"center"} padding={"20px"}>
                <Component {...args} dataItemRenderer={item => <div>{item.value}</div>}
                           theme={LinkComponent.lightTheme}>
                    https://www.facebook.com
                </Component>
            </LightModeContainer>
        </StyleContainer>
    </MemoryRouter>
}

Link.args = LinkComponent.defaultProps
Link.argTypes = defaultArgTypes;