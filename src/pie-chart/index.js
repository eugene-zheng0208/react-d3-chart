import React from "react"

import Pies from "./components//Pies"
import ResponsiveWrapper from "../ResponsiveWrapper"

const PieChart = ({ data }) => {
  const width = window.innerWidth,
    height = window.innerHeight,
    minViewportSize = Math.min(width, height),
    radius = minViewportSize * 0.7 / 2,
    x = width / 2,
    y = height / 2

  return (
    <svg width={width} height={height}>
      <g className="vizzlo-pie" transform={`translate(${x}, ${y})`}>
        <Pies data={data} radius={radius} />
      </g>
    </svg>
  )
}

export default ResponsiveWrapper(PieChart)
