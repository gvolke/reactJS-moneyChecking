import React, { useState } from "react"
import { useAuth } from "../../hooks/auth"
import { Link } from "react-router-dom"

import { FiMenu, FiActivity, FiBarChart2, FiLogOut } from "react-icons/fi"
import {
  SidebarContainer,
  SidebarHeader,
  SidebarContent,
  MenuButton,
  SidebarFooter,
  Text,
  UserAvatar,
  UserName,
} from "./style"

const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(false)
  const { signOut, user } = useAuth()

  const toggleSidebar = () => {
    setExpanded(!expanded)
  }

  return (
    <SidebarContainer expanded={expanded}>
      {expanded ? (
        <div>
          <SidebarHeader>
            <Text>Money Checking</Text>
            <FiMenu onClick={toggleSidebar} size={25} />
          </SidebarHeader>

          <SidebarContent>
            <Link to="/dashboard">
              <MenuButton expanded={expanded}>
                <FiActivity size={25} />
                <Text>Lançamentos</Text>
              </MenuButton>
            </Link>
            <Link to="/graphics">
              <MenuButton expanded={expanded}>
                <FiBarChart2 size={25} />
                <Text>Gráficos</Text>
              </MenuButton>
            </Link>
          </SidebarContent>

          <SidebarFooter>
            <Link to="/profile">
              <UserAvatar src={user.avatar_url} alt="profile" />
              <UserName>{user.name}</UserName>
            </Link>
            <FiLogOut size={25} onClick={signOut} />
          </SidebarFooter>
        </div>
      ) : (
        <div>
          <SidebarHeader>
            <FiMenu onClick={toggleSidebar} size={25} />
          </SidebarHeader>

          <SidebarContent>
            <Link to="/dashboard">
              <MenuButton expanded={expanded}>
                <FiActivity size={25} />
              </MenuButton>
            </Link>
            <Link to="/graphics">
              <MenuButton expanded={expanded}>
                <FiBarChart2 size={25} />
              </MenuButton>
            </Link>
          </SidebarContent>

          <SidebarFooter>
            <FiLogOut size={25} />
          </SidebarFooter>
        </div>
      )}
    </SidebarContainer>
  )
}

export default Sidebar
