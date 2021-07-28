import styled from "styled-components";

export const StyledSwitch = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  transform: scale(1.5);
  color: white;
  margin: ${props => props.theme.margin ? props.theme.margin : "0 0 0 0"};
  
  .react-switch-checkbox {
    height: 0;
    width: 0;
    display: none;
    margin: 0;
  }

  .react-switch-label {
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 32px;
    height: 16px;
    background: ${props => props.theme.trackBackgroundOff};
    border-radius: 50px;
    position: relative;

    &.switched {
      transition: all 0.4s ease-in-out;
      background: ${props => props.theme.trackBackgroundOn};
    }
  }

  .react-switch-label .react-switch-button {
    content: '';
    margin-left: -50%;
    width: 12px;
    height: 12px;
    border-radius: 15px;
    background: ${props => props.theme.knobBackground};
  }

  .react-switch-checkbox:checked + .react-switch-label .react-switch-button {
    margin-left: 50%;
    background: ${props => props.theme.knobBackgroundOn};
  }

  .right {
  @include theme-aware('color', 'text-color');
    opacity: 0.3;

    &.switched {
      opacity: 1;
    }
  }

  .left {
  @include theme-aware('color', 'text-color');
    opacity: 1;

    &.switched {
      opacity: 0.3;
    }
  }
`