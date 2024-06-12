import React, { useState } from "react"
import { Link } from "react-router-dom"

import "react-day-picker/lib/style.css"

import { Container, Content, Header } from "./styles"
import Sidebar from "../../components/Sidebar"

import { FiPower } from "react-icons/fi"
import { useAuth } from "../../hooks/auth"

const Graphics: React.FC = () => {
  const { signOut, user } = useAuth()

  return (
    <Container>
      <Sidebar />

      <Content>
        <Header>Gráficos</Header>
      </Content>
    </Container>
  )
}

export default Graphics
