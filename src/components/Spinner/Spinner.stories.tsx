import Spinner from "./Spinner";
import React from "react";
import Text from "../Text";

export default {
    title: "Spinner"
};

export const DefaultSpinner =  () => {
    return <div>
        <Text style={{marginBottom: 20}} text={"This is component Spinner:"} />
        <Spinner visible={true} text={'Loading'} />
    </div>
}