import React, {ChangeEvent, ChangeEventHandler, useCallback, useEffect, useState} from "react";
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
        name,
        autoComplete,
        placeholder,
        disabled,
        onChange,
        onEnter,
        required,
        withIcon,
        minLength,
        min,
        max,
        theme,
        autoFocus,
        dataTestId
    } = props;

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
                autoFocus={autoFocus}
                className={"inputField"}
                spellCheck="false"
                type={type}
                id={id}
                value={value}
                minLength={minLength}
                min={min}
                max={max}
                name={name}
                autoComplete={autoComplete}
                placeholder={placeholder}
                disabled={disabled}
                onChange={onChange}
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
    name: "",
    minLength: undefined,
    min: "0",
    max: "10000",
    autoComplete: "off",
    placeholder: "Aa",
    onChange: e => {},
    onEnter: null,
    required: false,
    withIcon: false,
    autoFocus: false
}

export const Input = BaseComponent<InputProps>(_Input, lightTheme, darkTheme);