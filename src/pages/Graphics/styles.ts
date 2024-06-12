import styled from "styled-components"
import { shade } from "polished"

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: row;
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

export const Content = styled.main`
  margin: 15px;
`
