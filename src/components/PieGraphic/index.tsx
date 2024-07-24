import React, { useState, useEffect } from "react"
import Chart from "react-apexcharts"

import { Container, Title } from "./styles"

interface GraphicsProps {
  options: {
    series: number[]
    labels: string[]
    colors: string[]
    tooltip?: {
      y?: {
        formatter?: (value: number) => string
      }
    }
  }
  title: string
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

const PieGraphic: React.FC<GraphicsProps> = ({ options, title, type }) => {
  const [chartOptions, setChartOptions] = useState(options)
  const [chartSeries, setChartSeries] = useState<number[]>([])

  useEffect(() => {
    setChartOptions(options)

    setChartSeries(options.series || [])
  }, [options])

  return (
    <Container>
      <Title>{title}</Title>
      <Chart options={chartOptions} series={chartSeries} type={type} />
    </Container>
  )
}

export default PieGraphic
