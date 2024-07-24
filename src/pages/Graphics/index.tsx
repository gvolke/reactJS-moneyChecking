import React, { useCallback, useEffect, useState } from "react"

import { Container, Content, Header, GraphicsContainer } from "./styles"

import api from "../../services/api"

import Sidebar from "../../components/Sidebar"
import Graphic from "../../components/Graphic"
import PieGraphic from "../../components/PieGraphic"

interface ListMonthData {
  month: string
  totalIncomes: number
  totalOutcomes: number
  monthBalance: number
}

interface ListCategoryData {
  category: string
  value: number
}

const Graphics: React.FC = () => {
  const [monthsList, setMonthsList] = useState<string[]>([])
  const [incomesList, setIncomesList] = useState<number[]>([])
  const [outcomesList, setOutcomesList] = useState<number[]>([])
  const [balanceList, setBalanceList] = useState<number[]>([])

  const [categoriesList, setCategoriesList] = useState<string[]>([])
  const [valuesList, setValuesList] = useState<number[]>([])

  const TransactionsGategories = useCallback(async () => {
    const response = await api.get("/usertransactions/grouped-category")
    const groupedList: ListCategoryData[] = await response.data

    setCategoriesList(
      groupedList.map((group) => {
        return group.category
      })
    )

    setValuesList(
      groupedList.map((group) => {
        return group.value
      })
    )
  }, [])

  const TransactionsGrouped = useCallback(async () => {
    const response = await api.get("/usertransactions/grouped-month")
    const groupedList: ListMonthData[] = await response.data

    setMonthsList(
      groupedList.map((group) => {
        return group.month
      })
    )

    setIncomesList(
      groupedList.map((group) => {
        return group.totalIncomes
      })
    )

    setOutcomesList(
      groupedList.map((group) => {
        return group.totalOutcomes
      })
    )

    setBalanceList(
      groupedList.map((group) => {
        return group.monthBalance
      })
    )
  }, [])

  useEffect(() => {
    TransactionsGrouped()
    TransactionsGategories()
  }, [TransactionsGrouped, TransactionsGategories])

  return (
    <Container>
      <Sidebar />

      <Content>
        <Header>Gráficos</Header>

        <GraphicsContainer>
          <Graphic
            title="Entradas"
            options={{
              xaxis: { categories: monthsList },
              tooltip: {
                y: {
                  formatter: function (value: number) {
                    return value.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  },
                },
              },
              dataLabels: {
                enabled: true,
                formatter: function (value: number) {
                  return value.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                },
              },
              colors: ["#32CD32"],
            }}
            chart={[{ name: "Entradas", data: incomesList }]}
            type="bar"
          />

          <Graphic
            title="Saídas"
            options={{
              xaxis: { categories: monthsList },
              tooltip: {
                y: {
                  formatter: function (value: number) {
                    return value.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  },
                },
              },
              dataLabels: {
                enabled: true,
                formatter: function (value: number) {
                  return value.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                },
              },
              colors: ["#FF8C00"],
            }}
            chart={[{ name: "Saídas", data: outcomesList }]}
            type="bar"
          />

          <Graphic
            title="Saldo"
            options={{
              xaxis: { categories: monthsList },
              tooltip: {
                y: {
                  formatter: function (value: number) {
                    return value.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  },
                },
              },
              dataLabels: {
                enabled: true,
                formatter: function (value: number) {
                  return value.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                },
              },
              colors: ["#1E90FF"],
            }}
            chart={[{ name: "Saldo", data: balanceList }]}
            type="bar"
          />

          <Graphic
            title="Comparativo"
            options={{
              xaxis: { categories: monthsList },
              tooltip: {
                y: {
                  formatter: function (value: number) {
                    return value.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  },
                },
              },
              dataLabels: {
                enabled: true,
                formatter: function (value: number) {
                  return value.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })
                },
              },
              colors: ["#32CD32", "#FF8C00", "#1E90FF"],
            }}
            chart={[
              { name: "Entradas", data: incomesList, stacked: true },
              { name: "Saídas", data: outcomesList, stacked: true },
              { name: "Saldo", data: balanceList, stacked: true },
            ]}
            type="area"
          />

          <PieGraphic
            title="Gastos por Categorias"
            options={{
              series: valuesList,
              tooltip: {
                y: {
                  formatter: function (value: number) {
                    return value.toLocaleString("pt-BR", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })
                  },
                },
              },
              labels: categoriesList,
              colors: [],
            }}
            type="pie"
          />
        </GraphicsContainer>
      </Content>
    </Container>
  )
}

export default Graphics
