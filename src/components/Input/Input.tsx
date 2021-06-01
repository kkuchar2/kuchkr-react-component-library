import React, {useCallback, useEffect, useState} from "react";
import {defaultProps, InputProps} from "./Input.types";
import classNames from "classnames";
import Text from "../Text";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

import "./Input.scss";

function Input(props: InputProps) {

    const {
        className, title, type, id, value, name, autoComplete, placeholder, disabled, onChange
    } = props;

    const [inputValue, setInputValue] = useState(value);

    useEffect(() => {
        if (onChange !== null) {
            if (inputValue !== undefined) {
                onChange(inputValue)
            }
        }
    }, [inputValue]);

    const onInputChange = useCallback((e) => {
        setInputValue(e.target.value);
    }, [])

    return <div className={classNames("input", className)}>
        <Text className={"name"} text={title}/>
        <input
            className={"inputField"}
            spellCheck="false"
            type={type}
            id={id}
            value={inputValue}
            name={name}
            autoComplete={autoComplete}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onInputChange} required/>
        <div className={"icon"}>
            <FontAwesomeIcon icon={faSearch}/>
        </div>
    </div>;
}

Input.defaultProps = defaultProps;

export default Input;