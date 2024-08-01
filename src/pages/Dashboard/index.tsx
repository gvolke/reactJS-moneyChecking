import React, { useState, useRef, useCallback, useEffect } from "react"

import { FormHandles } from "@unform/core"
import { Form } from "@unform/web"

import { format, parseISO } from "date-fns"

import api from "../../services/api"
import { useToast } from "../../hooks/toast"

import {
  Container,
  Content,
  Header,
  Transactions,
  TransactionCard,
} from "./styles"

import Sidebar from "../../components/Sidebar"
import Input from "../../components/InputUnform"

import { FiSearch } from "react-icons/fi"

interface Transaction {
  id: string
  type: string
  description: string
  observation: string
  user_id?: string
  date: Date
  value: number
}

interface TransactionBalance {
  transaction: Transaction
  balance: number
}

const Dashboard: React.FC = () => {
  const formRef = useRef<FormHandles>(null)
  const { addToast } = useToast()
  const [transactions, setTransactions] = useState<TransactionBalance[]>([])

  const handleSubmit = useCallback(
    async (formData: any) => {
      try {
        let descriptionPar = ""
        if (formData) {
          descriptionPar = formData.search
        }

        const response = await api.get("/usertransactions/all", {
          params: {
            description: descriptionPar,
          },
        })

        setTransactions(response.data)
      } catch {
        addToast({
          type: "error",
          title: "Erro na pesquisa",
          description:
            "Ocorreu um erro ao pesquisar os lançamentos, tente novamente",
        })
      }
    },
    [addToast]
  )

  useEffect(() => {
    handleSubmit("")
  }, [handleSubmit])

  return (
    <Container>
      <Sidebar />

      <Content>
        <Header>Histórico Completo</Header>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            name="search"
            icon={FiSearch}
            type="text"
            placeholder="Pesquisar lançamentos por descrição"
          />
        </Form>

        <Transactions>
          {transactions.map((data) => (
            <TransactionCard
              key={data.transaction.id}
              isOutcome={data.transaction.type === "SAIDA" ? true : false}
            >
              <span>{data.transaction.type}</span>

              <span>
                {`${format(
                  parseISO(data.transaction.date.toString()),
                  "dd/MM/yyyy"
                ).toString()}`}
              </span>

              <span>{data.transaction.description}</span>

              <span>{data.transaction.observation}</span>

              <span>
                {`Valor: R$ ${data.transaction.value.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })} | Saldo: R$ ${data.balance.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}`}
              </span>
            </TransactionCard>
          ))}
        </Transactions>
      </Content>
    </Container>
  )
}

export default Dashboard
