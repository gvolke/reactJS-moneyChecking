import React, { useRef, useCallback } from "react"
import { FiLock } from "react-icons/fi"
import { Form } from "@unform/web"
import { FormHandles } from "@unform/core"
import * as Yup from "yup"

import { useToast } from "../../hooks/toast"
import { useHistory, useLocation } from "react-router-dom"
import getValidationErrors from "../../utils/getValidationErrors"

import logoImg from "../../assets/Logo.png"

import Input from "../../components/InputUnform"
import Button from "../../components/Button"

import { Container, Content, AnimationContainer, Background } from "./styles"
import api from "../../services/api"

interface ResetPasswordFormData {
  email: string
  password: string
  password_confirmation: string
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null)

  const { addToast } = useToast()
  const location = useLocation()
  const history = useHistory()

  const handleSubmit = useCallback(
    async (data: ResetPasswordFormData) => {
      try {
        formRef.current?.setErrors({})

        const schema = Yup.object().shape({
          password: Yup.string().required("Senha obrigatória"),
          password_confirmation: Yup.string().oneOf(
            [Yup.ref("password"), null],
            "As senhas não batem"
          ),
        })

        await schema.validate(data, {
          abortEarly: false,
        })

        const { password, password_confirmation } = data
        const token = location.search.replace("?token=", "")

        if (!token) {
          throw new Error()
        }

        await api.post("/password/reset", {
          password: password,
          password_confirmation: password_confirmation,
          token,
        })

        history.push("/")
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err)

          formRef.current?.setErrors(errors)

          return
        }

        addToast({
          type: "error",
          title: "Erro ao resetar senha",
          description: "Ocorreu um erro resetar sua senha, tente novamente",
        })
      }
    },
    [addToast, history, location.search]
  )

  return (
    <Container>
      <Content>
        <AnimationContainer>
          <img src={logoImg} alt="GoBarber" />

          <Form ref={formRef} onSubmit={handleSubmit}>
            <h1>Resetar senha</h1>

            <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Nova senha"
            />

            <Input
              name="password_confirmation"
              icon={FiLock}
              type="password"
              placeholder="Confirmação da senha"
            />

            <Button type="submit">Alterar senha</Button>
          </Form>
        </AnimationContainer>
      </Content>
      <Background />
    </Container>
  )
}

export default SignIn
