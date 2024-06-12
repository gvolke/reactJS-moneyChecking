import styled from "styled-components"
import { shade } from "polished"

interface SideBarProps {
  expanded: boolean
}

export const SidebarContainer = styled.div<SideBarProps>`
  height: 100vh;
  width: ${(props) => (props.expanded ? "15em" : "5em")};
  background-color: #00a6ff;
  color: white;
  transition: width 0.4s ease;

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;

  padding: 18px;

  div {
    cursor: pointer;
  }
`

export const SidebarHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`

export const SidebarContent = styled.div`
  a {
    color: white;
    text-decoration: none;
  }
`

export const MenuButton = styled.div<SideBarProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 15px;
  border-radius: 10px;
  margin-top: 5px;

  svg {
    margin-right: ${(props) => (props.expanded ? "20px" : "0px")};
  }

  &:hover {
    background-color: #b4ccfc;
  }
`

export const SidebarFooter = styled.div`
  width: 100%;
  height: 60px;

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: ${shade(0.1, "#00a6ff")};

  gap: 20px;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: white;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    gap: 8px;
  }
`

export const Text = styled.text`
  margin-right: 30px;
`

export const UserAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 100%;

  border: 2px solid #4169e1;
`

export const UserName = styled.text``
