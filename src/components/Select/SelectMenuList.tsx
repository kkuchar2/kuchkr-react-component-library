import React, {useCallback} from "react";
import {Scrollbars} from "react-custom-scrollbars";

export const MenuList = (props: any) => {
    const {...data} = props;

    const renderThumbVertical = useCallback(({style, ...props}: { style: any }) => {
        return <div
            {...props}
            style={{
                ...style,
                backgroundColor: "#707070",
                width: "0.8rem",
                opacity: "0.6",
            }}
        />
    }, []);

    return <div style={{
        maxHeight: data.selectProps.maxMenuHeight,
        borderRadius: data.selectProps.listBorderRadius
    }}>
        <Scrollbars autoHeight
                    renderThumbVertical={renderThumbVertical}
                    style={{boxSizing: 'border-box'}}>
            {props.children}
        </Scrollbars>
    </div>;
};