export interface InputProps {
    className?: string;
    title?: string;
    type?: string;
    id?: string;
    value?: string;
    name?: string;
    autoComplete?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: Function;
}

export const defaultProps: InputProps = {
    className: null,
    title: "",
    type: "",
    id: "",
    value: "",
    name: "",
    autoComplete: "on",
    placeholder: "",
    disabled: false,
    onChange: v => {}
}

