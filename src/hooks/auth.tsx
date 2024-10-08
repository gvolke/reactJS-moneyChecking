import React, {
  createContext,
  useCallback,
  ReactNode,
  useState,
  useContext,
} from "react"
import api from "../services/api"

interface User {
  id: string
  name: string
  email: string
  avatar_url: string
}

interface AuthState {
  token: string
  user: User
}

interface SignInCedentials {
  email: string
  password: string
}

interface AuthContextData {
  user: User
  signIn(credentials: SignInCedentials): Promise<void>
  signOut(): void
  updateUser(user: User): void
}

interface Props {
  children: ReactNode
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@MoneyChecking:token")
    const user = localStorage.getItem("@MoneyChecking:user")

    if (token) {
      const tokenData = JSON.parse(atob(token.split(".")[1]))
      const tokenExpiry = tokenData.exp * 1000
      const currentTime = Date.now()

      if (currentTime > tokenExpiry) {
        localStorage.removeItem("@MoneyChecking:token")
        localStorage.removeItem("@MoneyChecking:user")

        return {} as AuthState
      }
    }

    if (token && user) {
      api.defaults.headers.authorization = `Bearer ${token}`

      return { token, user: JSON.parse(user) }
    }

    return {} as AuthState
  })

  const signIn = useCallback(async ({ email, password }: SignInCedentials) => {
    const response = await api.post("sessions", {
      email,
      password,
    })

    const { token, user } = response.data

    localStorage.setItem("@MoneyChecking:token", token)
    localStorage.setItem("@MoneyChecking:user", JSON.stringify(user))

    api.defaults.headers.authorization = `Bearer ${token}`

    setData({ token, user })
  }, [])

  const signOut = useCallback(() => {
    localStorage.removeItem("@MoneyChecking:token")
    localStorage.removeItem("@MoneyChecking:user")

    setData({} as AuthState)
  }, [])

  const updateUser = useCallback(
    (user: User) => {
      localStorage.setItem("@MoneyChecking:user", JSON.stringify(user))

      setData({
        token: data.token,
        user,
      })
    },
    [setData, data.token]
  )

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  return context
}
