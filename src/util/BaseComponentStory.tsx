import React from "react";
import { storyParams } from "./storyRenderer";
import styled from "styled-components";

export const defaultArgTypes = {
    theme: {
        control: false
    },
    children: {
        control: false
    }
}

interface ModeContainerProps {
    readonly width?: string;
    readonly height?: string;
    readonly alignItems?: string;
    readonly padding?: string;
}

export const DarkModeContainer = styled.div<ModeContainerProps>`
  background: #282828;
  display: flex;
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  justify-content: center;
  flex-direction: column;
  min-height: 100px;
  border-radius: 10px;
  padding: ${props => props.padding};
  height: ${props => props.height};
`

DarkModeContainer.displayName = "DarkModeContainer"

export const LightModeContainer = styled.div<ModeContainerProps>`
  margin-top: 20px;
  background: #e8e8e8;
  display: flex;
  align-items: ${props => props.alignItems ? props.alignItems : 'center'};
  justify-content: center;
  flex-direction: column;
  min-height: 100px;
  border-radius: 10px;
  padding: ${props => props.padding};
  height: ${props => props.height};
`

LightModeContainer.displayName = "LightModeContainer"

export const StyleContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 20px;
`

StyleContainer.displayName = "StyleContainer"

export const ComponentStory = (DisplayedComponent, rest = {}, argTypes = defaultArgTypes) => {

    const Component = (args) => <DisplayedComponent {...args} />;

    Component.displayName = DisplayedComponent.displayName;

    const ComponentWithArgs = (args) => {

        return <StyleContainer>
            <DarkModeContainer>
                <Component {...args} {...rest} theme={DisplayedComponent.darkTheme}/>
            </DarkModeContainer>

            <LightModeContainer>
                <Component {...args} {...rest} theme={DisplayedComponent.lightTheme}/>
            </LightModeContainer>
        </StyleContainer>
    }

    ComponentWithArgs.args = DisplayedComponent.defaultProps

    ComponentWithArgs.argTypes = argTypes;

    return ComponentWithArgs;
}

export const generateStoryOptions = (Component, group = '') => {
    return {
        title: Component.displayName,
        component: Component,
        parameters: storyParams(Component.darkTheme, Component.lightTheme),
        argTypes: {
            displayName: {
                table: {
                    disable: true
                }
            },
            children: {
                table: {
                    disable: true
                }
            }
        }
    }
}