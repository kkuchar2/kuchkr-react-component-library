import React, {useCallback, useState} from "react";
import Input from "./Input";
import Text from "../Text/Text";

import "../../Story.scss";
import Button from "../Button";

export default {
    title: "Input"
};

export const DefaultInput = () => {

    const [value, setValue] = useState('');

    const onChange = useCallback((v) => {
        console.log(`(${Date.now()}): Typed: ${v}`);
    }, []);

    return <div>
        <Text style={{marginBottom: 20}} text={"This is component Input"}/>
        <Input value={value} placeholder={'Enter text'} onChange={onChange} />
    </div>
}