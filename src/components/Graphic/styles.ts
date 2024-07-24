import styled from "styled-components"

export const Container = styled.div`
  margin: 10px;
  padding: 10px;
  background-color: white;

  flex: 1 1 calc(25% - 20px);

  @media (max-width: 768px) {
    flex: 1 1;
  }
`

export const Title = styled.h3`
  margin-top: 10px;
`
