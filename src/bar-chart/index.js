import React from "react"
import { scaleBand, scaleLinear } from "d3-scale"

import Axes from "./components/Axes"
import Bars from "./components/Bars"
import ResponsiveWrapper from "../ResponsiveWrapper"

const BarChart = ({ data, parentWidth }) => {
  const maxValue = Math.max(...data.map(d => d.value))
  const margins = { top: 50, right: 20, bottom: 100, left: 60 }

  const svgDimensions = {
    width: Math.max(parentWidth, 300),
    height: 550
  }

  const xScale = scaleBand()
    .padding(0.5)
    .domain(data.map(d => d.title))
    .range([margins.left, svgDimensions.width - margins.right])

  const yScale = scaleLinear()
    .domain([0, maxValue])
    .range([svgDimensions.height - margins.bottom, margins.top])

  return (
    <svg
      className="vizzlo-bar"
      width={svgDimensions.width}
      height={svgDimensions.height}
    >
      <Axes
        scales={{ xScale, yScale }}
        margins={margins}
        svgDimensions={svgDimensions}
      />
      <Bars
        scales={{ xScale, yScale }}
        margins={margins}
        data={data}
        maxValue={maxValue}
        svgDimensions={svgDimensions}
      />
    </svg>
  )
}

export default ResponsiveWrapper(BarChart)
