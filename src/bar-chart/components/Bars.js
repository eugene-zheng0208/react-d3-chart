import React from "react"
import { scaleOrdinal } from "d3-scale"

const Bars = ({ scales, margins, data, svgDimensions }) => {
  const colorScale = scaleOrdinal().range([
    "#E74C3C",
    "#3498DB",
    "#2ECC71",
    "#F1C40F",
    "#9B59B6"
  ])

  const { xScale, yScale } = scales
  const { height } = svgDimensions

  const bars = data.map((datum, i) => (
    <rect
      key={i}
      className="bar-chart"
      x={xScale(datum.title)}
      y={yScale(datum.value)}
      height={height - margins.bottom - scales.yScale(datum.value)}
      width={xScale.bandwidth()}
      fill={colorScale(i)}
    >
      <title>{`\u20AC${datum.value}`}</title>
    </rect>
  ))

  return <g>{bars}</g>
}

export default Bars
