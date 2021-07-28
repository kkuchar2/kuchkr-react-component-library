import styled from "styled-components";
import { styledListDefaultProps, StyledListProps } from "./List.types";

export const StyledList = styled.div<StyledListProps>`
  height: ${props => props.listHeight ? props.listHeight : "400px"};
  overflow: hidden;
  width: 100%;
  position: relative;
  top: 0;
  margin-top: ${props => props.theme.marginTop};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  background: ${props => props.theme.background};
  margin: ${props => props.theme.margin ? props.theme.margin : "0 0 0 0"};
`

StyledList.defaultProps = styledListDefaultProps;