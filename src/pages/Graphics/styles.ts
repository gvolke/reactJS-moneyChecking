import styled from "styled-components"
import { shade } from "polished"

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  height: 100vh;
`

export const Header = styled.header`
  background: #f5f5f5;
  font-size: 32px;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: #5b5b5b;
    }

    a {
      text-decoration: none;
      color: #4169e1;
    }

    a:hover {
      opacity: 0.8;
    }
  }
`

export const Content = styled.div`
  margin: 15px;
  width: 100%;

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

export const GraphicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
