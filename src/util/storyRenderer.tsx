import { ArgsTable, Description, Primary, PRIMARY_STORY, Stories, Subtitle, Title } from "@storybook/addon-docs";

import React from "react";

export const storyParams = (theme1, theme2) => {

    return {
        docs: {
            page: () => {
                return <>
                    <Title/>
                    <Subtitle/>
                    <Description/>
                    <Primary/>
                    <ArgsTable story={PRIMARY_STORY}/>
                    <Stories title={''}/>
                </>
            },
        },
    }
}