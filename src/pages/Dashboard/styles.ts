import styled, { css } from "styled-components"
import { shade } from "polished"

interface transactionCardProps {
  isOutcome: boolean
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;

  height: 100dvh;
`

export const Header = styled.header`
  background: #f5f5f5;
  font-size: 32px;
  margin-bottom: 20px;

  height: 30px;
`

export const Content = styled.main`
  padding: 20px;
  width: 100%;

  display: flex;
  flex-direction: column;

  Form {
    height: 60px;
    margin-bottom: 10px;
  }
`

export const Transactions = styled.div`
  width: 100%;
  flex: 1;

  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: white;
  }

  ::-webkit-scrollbar-thumb {
    background: ${shade(0.1, "#00a6ff")};
    border-radius: 5px;
  }

  /* Handle ao passar o mouse */
  ::-webkit-scrollbar-thumb:hover {
    background: #b4ccfc;
  }
`

export const TransactionCard = styled.div<transactionCardProps>`
  border: #4169e1 solid 2px;
  border-radius: 8px;
  margin-right: 5px;

  color: black;
  font-size: 18px;
  padding: 10px;
  margin-bottom: 10px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  span:first-of-type {
    color: green;

    ${(props) =>
      props.isOutcome &&
      css`
        color: #dc143c;
      `}
    font-weight: 500;
  }
`
