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
