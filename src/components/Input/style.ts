import styled from "styled-components";
import { defaultStyledInputProps, StyledInputProps } from "./Input.types";

export const StyledInputWrapper = styled.div`
`;

export const StyledInput = styled.div<StyledInputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
  background: ${props => props.theme.backgroundColor};
  border: none;
  font-family: ${props => props.theme.fontFamily ? props.theme.fontFamily : 'inherit'};
  border-radius: ${props => props.theme.borderRadius};
  width: ${props => props.theme.width ? props.theme.width : "100%"};
  margin: ${props => props.theme.margin ? props.theme.margin : "0 0 0 0"};

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
    font-size: ${props => props.theme.fontSize ? props.theme.fontSize : "16px"};
    outline: 0;
    color: ${props => props.theme.textColor};
    padding-right: 12px;
    caret-color: #535353;
    font-family: ${props => props.theme.fontFamily ? props.theme.fontFamily : 'inherit'};
    background: transparent;
    border-bottom: ${props => props.theme.border};

    &:focus {
      border-bottom: ${props => props.theme.borderFocus};
    }

    .title {
      width: 150px;
    }

    &::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: ${props => props.theme.placeholderTextColor};
    }

    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color: ${props => props.theme.placeholderTextColor};
    }

    &::-ms-input-placeholder { /* Microsoft Edge */
      color: ${props => props.theme.placeholderTextColor};
    }

    input:focus::placeholder {
      color: transparent;
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      font-size: 16px;
      color: #ffffff;
      -webkit-text-fill-color: inherit;
      -webkit-transition-delay: 9999s;
      -webkit-box-shadow: 0 0 0 10px #3b3bb4 inset !important;
    }

    input:-webkit-autofill::first-line {
      font-size: 16px;
      outline: 0;
      font-family: ${props => props.theme.fontFamily? props.theme.fontFamily : 'inherit'};
      color: #ffffff;
    }
  }
`

StyledInput.defaultProps = defaultStyledInputProps;