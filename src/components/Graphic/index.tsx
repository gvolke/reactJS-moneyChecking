import React, { useState, useEffect } from "react"
import Chart from "react-apexcharts"

import { Container, Title } from "./styles"

interface GraphicsProps {
  options: {
    series?: number[]
    xaxis?: {
      categories: string[]
    }
    tooltip?: {
      y?: {
        formatter?: (value: number) => string
      }
    }
    dataLabels?: {
      enabled?: boolean
      formatter?: (value: number) => string
    }
    labels?: string[]
    colors: string[]
  }
  title: string
  chart?: {
    name: string
    data: any[]
    stacked?: boolean
  }[]
  type:
    | "area"
    | "line"
    | "bar"
    | "pie"
    | "donut"
    | "radialBar"
    | "scatter"
    | "bubble"
    | "heatmap"
    | "candlestick"
    | "boxPlot"
    | "radar"
    | "polarArea"
    | "rangeBar"
    | "rangeArea"
    | "treemap"
    | undefined
}

const Graphic: React.FC<GraphicsProps> = ({ options, title, chart, type }) => {
  const [chartOptions, setChartOptions] = useState(options)

  const [chartSeries, setChartSeries] = useState(chart)

  useEffect(() => {
    setChartOptions(options)

    setChartSeries(chart)
  }, [options, chart])

  return (
    <Container>
      <Title>{title}</Title>
      <Chart options={chartOptions} series={chartSeries} type={type} />
    </Container>
  )
}

export default Graphic
