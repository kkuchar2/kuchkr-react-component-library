import Select from "./Select";
import React, {useState} from "react";
import Text from "../Text";
import {name} from 'faker'

export default {
    title: "Select"
};

export const InfiniteSelect = () => {

    const [items, setItems] = useState(Array.from({length: 20}).map(() => ({
        title: name.findName()
    })));

    const fetch = () => {
        setTimeout(() => {
            const nextItems = items.concat(
                Array.from({length: 20}).map(() => ({
                    title: name.findName()
                }))
            )
            setItems(nextItems)
        }, 200)
    }

    return <div>
        <Text style={{marginBottom: 20}} text={"This is component Select:"}/>
        <Select
            title={'Select name'}
            items={items}
            fetchItems={fetch}
            itemRenderer={item => <p>{item.title}</p>} />
    </div>
}
