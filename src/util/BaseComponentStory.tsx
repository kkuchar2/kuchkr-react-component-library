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
    readonly marginTop?: number;
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
  margin-top: ${props => `${props.marginTop}px`};
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

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin-bottom: 20px;
`

StyledContainer.displayName = "StyleContainer"

export const ComponentStory = (DisplayedComponent, rest = {}, argTypes = defaultArgTypes) => {

    const Component = (args) => <DisplayedComponent {...args} />;

    Component.displayName = DisplayedComponent.displayName;

    const ComponentWithArgs = (args) => {

        return <StyledContainer>
            <DarkModeContainer>
                <Component {...args} {...rest} theme={DisplayedComponent.darkTheme}/>
            </DarkModeContainer>

            <LightModeContainer>
                <Component {...args} {...rest} theme={DisplayedComponent.lightTheme}/>
            </LightModeContainer>
        </StyledContainer>
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