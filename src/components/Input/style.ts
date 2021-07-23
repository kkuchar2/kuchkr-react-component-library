import styled from "styled-components";
import { defaultStyledInputProps, StyledInputProps } from "./Input.types";

export const StyledInput = styled.div<StyledInputProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  background: ${props => props.theme.backgroundColor};
  border: ${props => props.theme.border};
  font-family: $open-sans;
  border-radius: ${props => props.theme.borderRadius};
  
  .formName {
    font-size: 14px;
    color: #6a6c7c;
    margin-top: 5px;
  }

  .inputField {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    height: ${props => props.theme.height};
    font-size: 16px;
    line-height: ${props => props.theme.height};
    outline: 0;
    color: ${props => props.theme.textColor};
    padding-left: 12px;
    padding-right: 12px;
    caret-color: #535353;
    font-family: 'Arial';

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
      font-family: "Whitney Medium", sans-serif;
      color: #ffffff;
    }
  }
`

StyledInput.defaultProps = defaultStyledInputProps;