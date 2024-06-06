import React, { InputHTMLAttributes } from "react"

import { Container } from "./style"

interface TooltipProps extends InputHTMLAttributes<HTMLInputElement> {
  title: string
  className?: string
}

const Tooltip: React.FC<TooltipProps> = ({ title, className, children }) => {
  return (
    <Container className={className}>
      {children}
      <span>{title}</span>
    </Container>
  )
}

export default Tooltip
