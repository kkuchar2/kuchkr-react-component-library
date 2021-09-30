import React, {useCallback, useEffect, useState} from "react";
import {InputProps} from "./Input.types";
import {darkTheme, lightTheme} from "./themes";
import {BaseComponent, BaseComponentProps} from "../../hoc";
import {StyledInput, StyledInputWrapper} from "./style";
import {Text} from "../Text";

export const _Input = (props: BaseComponentProps & InputProps) => {

    const {
        style,
        title,
        type,
        id,
        value,
        initialValue,
        name,
        autoComplete,
        placeholder,
        disabled,
        onChange,
        onEnter,
        required,
        theme
    } = props;

    const [inputValue, setInputValue] = useState(initialValue);

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
            return <Text theme={theme.titleTextTheme} text={title}/>;
        }
    }, [title, theme])

    const onKeyDown = useCallback((event) => {
        if (event.key === 'Enter') {
            onEnter?.();
        }
    }, [onEnter]);

    return <StyledInputWrapper style={style}>
        {renderTitle()}
        <StyledInput>
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
                onKeyDown={onKeyDown}
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
    initialValue: "",
    name: "",
    autoComplete: "off",
    placeholder: "Enter some text please",
    onChange: null,
    onEnter: null,
    required: false
}

export const Input = BaseComponent<InputProps>(_Input, lightTheme, darkTheme);