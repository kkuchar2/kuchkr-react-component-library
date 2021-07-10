import React, { useCallback, useEffect, useState } from "react";
import { InputProps} from "./Input.types";
import { darkTheme, lightTheme } from "./themes";
import { BaseComponent, BaseComponentProps } from "../../hoc";
import { Text } from "../Text";
import { StyledInput } from "./style";

export const _Input = (props: BaseComponentProps & InputProps) => {

    const {style, title, type, id, value, name, autoComplete, placeholder, disabled, onChange, required} = props;

    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        if (onChange && inputValue) {
            onChange(inputValue);
        }
    }, [inputValue]);

    const onInputChange = useCallback((e) => {
        setInputValue(e.target.value);
    }, [])

    return <StyledInput style={style}>
        <Text text={title}/>
        <input
            className={"inputField"}
            spellCheck="false"
            type={type}
            id={id}
            value={value ? value : inputValue}
            name={name}
            autoComplete={autoComplete}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onInputChange}
            required={required}
        />
    </StyledInput>;
}

_Input.defaultProps = {
    title: "",
    type: "",
    id: "",
    value: "",
    name: "",
    autoComplete: "off",
    placeholder: "Enter text",
    onChange: null,
    required: false
}

export const Input = BaseComponent<InputProps>(_Input, lightTheme, darkTheme);