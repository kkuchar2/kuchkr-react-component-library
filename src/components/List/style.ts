import styled from "styled-components";
import { styledListDefaultProps, StyledListProps } from "./List.types";

export const StyledList = styled.div<StyledListProps>`
  height: ${props => props.listHeight};
  overflow: hidden;
  width: 100%;
  position: relative;
  top: 0;
  margin-top: ${props => props.theme.marginTop};
  border: ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};
  background: ${props => props.theme.background};
`

StyledList.defaultProps = styledListDefaultProps;