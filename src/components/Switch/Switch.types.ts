export interface SwitchProps {
    className: string;
    switched: boolean;
    onSwitchedChange: Function;
    leftRenderer?: Function;
    rightRenderer?: Function
}

export const defaultProps: SwitchProps = {
    className: null,
    switched: false,
    onSwitchedChange: null,
    leftRenderer:  null,
    rightRenderer: null
}