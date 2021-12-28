import React, {useCallback, useEffect, useState} from "react";
import {name} from 'faker'
import {Select as SelectComponent} from './Select';
import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyledContainer
} from "../../util/BaseComponentStory";
import styled from "styled-components";


export default generateStoryOptions(SelectComponent);

const Component = (args) => <SelectComponent {...args} />;

Component.displayName = SelectComponent.displayName;

const staticItems = Array.from({length: 120}).map(() => {
    return {value: name.firstName(), label: name.lastName()};
});

const StyledOption = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledOptionValue = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
`;

const StyledOptionIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`;


const StyledLabel = styled.div`
  font-size: 1em;
`;


const StyledValue = styled.div`
  font-size: 0.7em;
`;


const customOptionRenderer = (label: string, value: any) => {
    return <StyledOption>
        <StyledOptionIcon>
            🎅
        </StyledOptionIcon>
        <StyledOptionValue>
            <StyledLabel>{label}</StyledLabel>
            <StyledValue>{value}</StyledValue>
        </StyledOptionValue>
    </StyledOption>
}

export const Select = (args) => {

    const [items, setItems] = useState([]);

    const onChange = useCallback((v) => {
        if (!v) return;
        console.log('Value changed to: ' + v.label);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setItems(staticItems);
        }, 1000);
    }, []);

    return <StyledContainer>
        <DarkModeContainer height={"200px"} alignItems={"center"} padding={"20px"}>
            <Component {...args}
                       dataTestId={'select_test_id1'}
                       options={items}
                       onChange={onChange}
                       triggerOnDefault={true}
                       maxMenuHeight={400}
                       customOptionRenderer={customOptionRenderer}
                       selectFirstAfterLoad={true}
                       emptyPlaceholder={"No items loaded yet"}
                       theme={SelectComponent.darkTheme}/>
        </DarkModeContainer>

        <LightModeContainer height={"200px"} alignItems={"center"} padding={"20px"}>
            <Component {...args}
                       options={items}
                       selectFirstAfterLoad={true}
                       customOptionRenderer={customOptionRenderer}
                       emptyPlaceholder={"No items loaded yet"}
                       theme={SelectComponent.lightTheme}/>
        </LightModeContainer>
    </StyledContainer>
}

Select.args = SelectComponent.defaultProps
Select.argTypes = defaultArgTypes;