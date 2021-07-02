export interface SwitchProps {
    switched: boolean;
    onSwitchedChange: Function;
    leftRenderer?: Function;
    rightRenderer?: Function
}