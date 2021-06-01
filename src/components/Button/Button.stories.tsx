import React, {useCallback, useState} from "react";
import Button from "./Button";
import Text from "../Text/Text";

import "../../Story.scss";

export default {
    title: "Button"
};

export const DefaultButton = () => {

    const onClick = useCallback((v) => {
        console.log(`(${Date.now()}): Button clicked!`);
    }, []);

    return <div>
        <Text style={{marginBottom: 20}} text={"This is component Button"}/>
        <Button text={"Click me!"} onClick={onClick} />
    </div>
}