import React, {useCallback, useEffect, useState} from "react";
import {Select as SelectComponent} from './Select';
import {
    DarkModeContainer,
    defaultArgTypes,
    generateStoryOptions,
    LightModeContainer,
    StyledContainer
} from "../../util/BaseComponentStory";

import {Text} from '../Text';

import styled from "styled-components";
import Chance from 'chance';

let chance = new Chance()

export default generateStoryOptions(SelectComponent);

const Component = (args) => <SelectComponent {...args} />;

Component.displayName = SelectComponent.displayName;

const staticItems = Array.from({length: 120}).map(() => {
    return {value: chance.first(), label: chance.last()};
});

const smallItems = Array.from({length: 3}).map(() => {
    return {value: chance.first(), label: chance.last()};
});

const smallTitleTheme = {
    textColor: "#d0d0d0",
    disabledTextColor: "#9e9e9e",
    fontSize: "15px",
    hoverColor: '#d0d0d0',
    margin: "10px 0px 20px 0px",
    maxWidth: '300px',
    maxHeight: '300px',
    textAlign: 'left'
}

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


const formatOptionLabel = ({value, label, customAbbreviation}) => {
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

    const [value, setValue] = useState(null);

    const onChange = useCallback((newValue, actionMeta) => {
        if (!newValue) return;
        setValue(newValue);
    }, []);

    useEffect(() => {
        setTimeout(() => {
            setItems(staticItems);
        }, 1000);
    }, []);

    useEffect(() => setValue(items[0]), [items]);

    return <StyledContainer>
        <DarkModeContainer height={"200px"} alignItems={"center"} padding={"20px"}>
            <Component {...args}
                       dataTestId={'select_test_id1'}
                       value={value}
                       options={items}
                       onChange={onChange}
                       maxMenuHeight={200}
                       formatOptionLabel={formatOptionLabel}
                       selectFirstAfterLoad={true}
                       emptyPlaceholder={"No items loaded yet"}
                       theme={SelectComponent.darkTheme}/>
        </DarkModeContainer>

        <DarkModeContainer marginTop={20} alignItems={"center"} padding={"20px"}>

            <Text theme={smallTitleTheme} text={"Small number of items:"} />

            <Component {...args}
                       dataTestId={'select_test_id1'}
                       options={smallItems}
                       onChange={onChange}
                       maxMenuHeight={200}
                       menuPortalTarget={document.body}
                       customOptionRenderer={formatOptionLabel}
                       selectFirstAfterLoad={true}
                       emptyPlaceholder={"No items loaded yet"}
                       theme={SelectComponent.darkTheme}/>
        </DarkModeContainer>
    </StyledContainer>
}

Select.args = SelectComponent.defaultProps
Select.argTypes = defaultArgTypes;