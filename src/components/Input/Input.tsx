import React, {useCallback, useEffect, useState} from "react";
import {InputProps} from "./Input.types";
import {darkTheme, lightTheme} from "./themes";
import {BaseComponent, BaseComponentProps} from "../../hoc";
import {StyledInput, StyledInputWrapper} from "./style";
import {Text} from "../Text";
import SendIcon from '@material-ui/icons/Send';

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
        withIcon,
        theme,
        dataTestId
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

    const renderIcon = useCallback(() => {
        if (withIcon) {
            return <SendIcon style={{
                position: "absolute",
                left: theme.iconPositionLeft
            }} htmlColor={theme.iconColor} fontSize={theme.iconFontSize}/>
        }
        return null;
    }, [withIcon, theme]);

    return <StyledInputWrapper data-testid={dataTestId} style={style}>
        {renderTitle()}
        <StyledInput>
            {renderIcon()}
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
    placeholder: "Aa",
    onChange: null,
    onEnter: null,
    required: false,
    withIcon: false
}

export const Input = BaseComponent<InputProps>(_Input, lightTheme, darkTheme);