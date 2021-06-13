import Slider from "./Slider";
import React, {useCallback, useState} from "react";
import Text from "../Text";
import { useDarkMode } from 'storybook-dark-mode';

export default {
    title: "Slider"
};

export const DefaultSlider = () => {

    const [value, setValue] = useState(65);

    const onSliderChange = useCallback(setValue, []);

    return <div>
        <Text
            style={{marginBottom: 20}}
            text={`Slider (linear) with value: ${value}`}/>

        <Slider
            style={{width: 300}}
            className={'additionalClassName'}
            logarithmic={false}
            markValues={[50, 75, 100, 150]}
            value={value}
            min={0}
            max={200}
            disabled={false}
            onChange={onSliderChange}
            darkTheme={useDarkMode()} />

        {/*<Text style={{marginTop: 20, marginBottom: 20}}*/}
        {/*      text={`Slider (logarithmic) with value: ${value}`}/>*/}

        {/*<Slider*/}
        {/*    style={{marginTop: 30, width: 300}}*/}
        {/*    className={'additionalClassName'}*/}
        {/*    logarithmic={true}*/}
        {/*    markValues={[50, 75, 100, 150]}*/}
        {/*    value={value}*/}
        {/*    min={1}*/}
        {/*    max={200}*/}
        {/*    disabled={false}*/}
        {/*    onChange={onSliderChange} />*/}
    </div>
}
