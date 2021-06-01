import List from "./List";
import React, { useState} from "react";
import Text from "../Text";
import {name} from 'faker'

export default {
    title: "List"
};

export const InfiniteList = () => {
    const [items, setItems] = useState(Array.from({length: 5}).map(() => ({
        title: name.findName()
    })));

    const fetch = (start, stop) => {
        setTimeout(() => {
            console.log(`(${Date.now()}): Fetching items [${start},${stop}]`);
            const fetchedItems = Array.from({length: (stop-start)}).map(() => ({
                title: name.findName()
            }));

            setItems(items.concat(fetchedItems));
        }, 200)
    }

    return <div>
        <Text style={{marginBottom: 20}} text={"This is component List using react-virtualized"}/>
        <Text style={{marginBottom: 20}} text={"Tip: scroll down to load more items"}/>
        <List
            disabled={true}
            height={400}
            items={items}
            onItemClick={v => console.log(v)}
            fetchItems={(start, stop) => fetch(start, stop)}
            dataItemRenderer={item => <p>{item.title}</p>}/>
    </div>
}

export const ConstantItemsList = () => {
    const [items] = useState(Array.from({length: 500}).map(() => ({title: name.findName()})));

    return <div>
        <Text style={{marginBottom: 20}} text={"This is component List using react-virtualized"}/>
        <Text style={{marginBottom: 20}} text={"Tip: scroll down to load more items"}/>
        <List
            disabled={true}
            height={400}
            rowHeight={60}
            items={items}
            dataItemRenderer={item => <p>{item.title}</p>}/>
    </div>
}
