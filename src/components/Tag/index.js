import { Link } from "gatsby";
import React, { useContext } from "react";
import styled from "styled-components";
import { ReducerContext } from "../../reducers/root";

export const Tag = ({ name, identifier, onClick }) => {
  const { state, dispatch } = useContext(ReducerContext);
  const {
    filter: { tag }
  } = state;
  const onTagClick = e => {
    onClick && onClick(identifier);
    dispatch({ type: "FILTER_BY_TAG", payload: { tag: identifier } });
  };
  const isActive = tag === identifier;
  return (
    <Wrapper to={`/tag/${tag}`} onClick={onTagClick} active={isActive}>
      {name}
    </Wrapper>
  );
};

const Wrapper = styled(Link)`
  border: 1px solid ${props => props.theme.textColor};
  border-bottom: 1px solid ${props => props.theme.textColor}!important;
  border-opacity: 0.1;
  padding: 0px 6px;
  border-radius: 25px;
  background-color: ${props => props.active && props.theme.textColor};
  color: ${props => props.active && props.theme.bgColor}!important;
  cursor: pointer;

  &:hover {
    border: 1px solid ${props => props.theme.textColor};
    border-bottom: 1px solid ${props => props.theme.textColor}!important;
    color: ${props => props.theme.bgColor}!important;
    background-color: ${props => props.theme.textColor};
  }
`;
