import {Dictionary} from "../../util/BaseTypes.types";
import {lightTheme} from "./themes";

export interface SwitchProps {
    isOn: boolean;
    onChange: (isOn: boolean) => void
}

export interface StyledSwitchProps {
    theme?: Dictionary<any>
}

export const defaultStyledSwitchProps = {
    theme: lightTheme
}