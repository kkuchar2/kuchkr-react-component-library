import React from "react";
import Text from "../Text";
import ListItem from "./ListItem";

export default {
    title: "ListItem"
};

export const DefaultListItem = () => <div>
    <Text style={{marginBottom: 20}} text={"This is component ListItem:"}/>
    <ListItem
        style={{height: 50, background: '#404040'}}
        index={0}
        onClick={v => console.log(`Clicked: ${v} ListItem`)}>
        <div>LIST ITEM CHILD</div>
    </ListItem>

</div>;