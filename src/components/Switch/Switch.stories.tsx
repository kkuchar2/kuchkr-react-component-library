import React from 'react'

import Switch from "./Switch";
import Text from "../Text";
import {faMoon, faSun} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default {
    title: "Switch"
};

export const SwitchWithIcons = () => <div>
    <Text style={{marginBottom: 20}} text={"This is component Switch"}/>
    <Switch
        leftRenderer={() => <FontAwesomeIcon className={"sun"} icon={faSun}/>}
        rightRenderer={() => <FontAwesomeIcon className={"moon"} icon={faMoon}/>}
    />
</div>

export const SwitchWithText = () => <div>
    <Text style={{marginBottom: 20}} text={"This is component Switch"}/>
    <Switch
        leftRenderer={() => <Text text={'Light'} />}
        rightRenderer={() => <Text text={'Dark'} />}
    />
</div>

