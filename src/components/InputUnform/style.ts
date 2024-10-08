import styled, { css } from "styled-components"

import Tooltip from "../Tooltip"

interface ContainerProps {
  isFocused: boolean
  isFilled: boolean
  isErrored: boolean
}

export const Container = styled.div<ContainerProps>`
  background: #f8f8ff;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #4169e1;
  color: #5b5b5b;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: #3fd5c8;
      border-color: #3fd5c8;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #3fd5c8;
    `}  

  input {
    flex: 1;
    border: 0;
    background: transparent;
    color: #5b5b5b;

    &::placeholder {
      color: #5b5b5b;
    }
  }

  svg {
    ${(props) =>
      !props.isFilled &&
      !props.isFocused &&
      css`
        color: #4169e1;
      `}
    margin-right: 16px;
  }
`

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`
