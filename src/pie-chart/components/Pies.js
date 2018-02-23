import React from "react"
import { scaleOrdinal } from "d3-scale"
import { pie, arc } from "d3-shape"

const Pies = ({ data, radius }) => {
  const outerRadius = radius,
    innerRadius = 0

  const colorScale = scaleOrdinal().range([
    "#E74C3C",
    "#3498DB",
    "#2ECC71",
    "#F1C40F",
    "#9B59B6"
  ])

  const newPie = pie()
    .sort(null)
    .value(d => d.value)

  const newArc = arc()
    .outerRadius(outerRadius)
    .innerRadius(innerRadius)

  const labelArc = arc()
    .outerRadius(outerRadius + 22)
    .innerRadius(outerRadius + 22)

  const paths = newPie(data).map((d, i) => (
    <g key={i}>
      <path
        className="pie-chart"
        fill={colorScale(i)}
        d={newArc(d)}
        stroke="#fff"
      />
      <text
        className="pie-label"
        transform={`translate(${labelArc.centroid(d)})`}
        dy=".35em"
      >
        {d.data.title}
      </text>
      <title>{`\u20AC${d.data.value}`}</title>
    </g>
  ))

  return <g>{paths}</g>
}

export default Pies
