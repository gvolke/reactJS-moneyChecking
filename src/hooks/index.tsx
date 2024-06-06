import React, { ReactNode } from "react"

import { AuthProvider } from "./auth"
import { ToastProvider } from "./toast"

interface ContextProps {
  children: ReactNode
}

const AppProvider: React.FC<ContextProps> = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
)

export default AppProvider
