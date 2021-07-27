import React, { useCallback, useEffect, useState } from "react";
import { InputProps } from "./Input.types";
import { darkTheme, lightTheme } from "./themes";
import { BaseComponent, BaseComponentProps } from "../../hoc";
import { StyledInput, StyledInputWrapper} from "./style";
import { Text } from "../Text";

export const _Input = (props: BaseComponentProps & InputProps) => {

    const {style, title, type, id, value, name, autoComplete, placeholder, disabled, onChange, required, theme} = props;

    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        if (onChange && inputValue) {
            onChange(inputValue);
        }
    }, [inputValue]);

    const onInputChange = useCallback((e) => {
        setInputValue(e.target.value);
    }, [])

    const renderTitle = useCallback(() => {
        if (title) {
            return <Text style={{marginBottom: 10, fontWeight: 'bold'}} theme={theme.textTheme} text={title}/>;
        }
    }, [title, theme])

    return <StyledInputWrapper>
        {renderTitle()}
        <StyledInput style={style}>
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
        </StyledInput>
    </StyledInputWrapper>;
}

_Input.defaultProps = {
    title: "Enter text:",
    type: "",
    id: "",
    value: "",
    name: "",
    autoComplete: "off",
    placeholder: "",
    onChange: null,
    required: false
}

export const Input = BaseComponent<InputProps>(_Input, lightTheme, darkTheme);