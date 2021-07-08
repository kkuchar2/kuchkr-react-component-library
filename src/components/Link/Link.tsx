import React, { useCallback } from "react";
import { LinkProps} from "./Link.types";
import { darkTheme, lightTheme } from "./themes";
import { BaseComponent, BaseComponentProps } from "../../hoc";
import { Text } from "../Text";
import { StyledLink } from "./style";

export const _Link = (props: BaseComponentProps & LinkProps) => {

    const {style, disabled, onClick, theme, children, to } = props;

    const onLinkClick = (e) => {
        if (disabled) {
            return;
        }

        if (onClick) {
            onClick(e);
        }
    };

    return <StyledLink to={to} style={style} type={"submit"} onClick={onLinkClick} disabled={disabled}>{children}</StyledLink>
}

_Link.defaultProps = {
    url: null,
    children: null,
    onClick: null,
    to: "/"
};

export const Link = BaseComponent<LinkProps>(_Link, lightTheme, darkTheme);