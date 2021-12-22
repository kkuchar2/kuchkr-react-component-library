import styled from "styled-components";
import {defaultStyledInputProps, StyledInputProps} from "./Input.types";

export const StyledInputWrapper = styled.div`
  margin: ${props => props.theme.margin ? props.theme.margin : "0 0 0 0"};
`;

export const StyledInput = styled.div<StyledInputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: row;
  position: relative;
  background: ${props => props.theme.backgroundColor};
  border: none;
  font-family: ${props => props.theme.fontFamily ? props.theme.fontFamily : 'inherit'};
  border-radius: ${props => props.theme.borderRadius};
  width: ${props => props.theme.width ? props.theme.width : "100%"};
  margin: ${props => props.theme.inputMargin ? props.theme.inputMargin : "0 0 0 0"};

  .formName {
    font-size: 14px;
    color: #6a6c7c;
    margin-top: 5px;
  }

  .inputField {
    background: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${props => props.theme.width ? props.theme.width : "100%"};
    box-sizing: border-box;
    height: ${props => props.theme.height};
    font-size: ${props => props.theme.inputTextTheme.fontSize};
    outline: 0;
    color: ${props => props.theme.inputTextTheme.textColor};
    padding: ${props => props.theme.padding};
    caret-color: ${props => props.theme.caretColor};
    font-family: ${props => props.theme.inputTextTheme.fontFamily ? props.theme.inputTextTheme.fontFamily : 'inherit'};
    background: transparent;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: ${props => props.theme.border};
    transition: border ease-in-out 0.3s;
    line-height: ${props => props.theme.height};
    font-weight: ${props => props.theme.inputTextTheme.fontWeight ? props.theme.inputTextTheme.fontWeight : 'inherit'};
    
    &:focus {
      border-bottom: ${props => props.theme.borderFocus};
    }

    .title {
      width: 150px;
    }

    &::placeholder {
      color: ${props => props.theme.placeholderTextTheme.textColor};
      font-size: ${props => props.theme.placeholderTextTheme.fontSize};
      text-align: ${props => props.theme.placeholderTextTheme.textAlign};
      font-weight: ${props => props.theme.placeholderTextTheme.fontWeight};
    }

    &:-ms-input-placeholder {
      color: ${props => props.theme.placeholderTextTheme.textColor};
      font-size: ${props => props.theme.placeholderTextTheme.fontSize};
      text-align: ${props => props.theme.placeholderTextTheme.textAlign};
      font-weight: ${props => props.theme.placeholderTextTheme.fontWeight};
    }

    &::-ms-input-placeholder {
      color: ${props => props.theme.placeholderTextTheme.textColor};
      font-size: ${props => props.theme.placeholderTextTheme.fontSize};
      text-align: ${props => props.theme.placeholderTextTheme.textAlign};
      font-weight: ${props => props.theme.placeholderTextTheme.fontWeight};
    }

    input:focus::placeholder {
      color: transparent;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      font-size: ${props => props.theme.inputTextTheme.fontSize};
      color: #ffffff;
      -webkit-text-fill-color: inherit;
      -webkit-transition-delay: 9999s;
      -webkit-box-shadow: 0 0 0 10px #3b3bb4 inset !important;
    }

    input:-webkit-autofill::first-line {
      font-size: ${props => props.theme.inputTextTheme.fontSize};
      outline: 0;
      font-family: ${props => props.theme.inputTextTheme.fontFamily ? props.theme.inputTextTheme.fontFamily : 'inherit'};
      color: #ffffff;
    }
  }
`

StyledInput.defaultProps = defaultStyledInputProps;