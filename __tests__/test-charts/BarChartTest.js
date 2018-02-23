/*eslint no-undef: 0*/
import { expect } from "chai"
import React from "react"
import ReactTestUtils from "react-dom/test-utils"

import BarChart from "../../src/bar-chart"
import { generatePartsOfWhole as generateData } from "../utils/datagen"

describe("BarChart", () => {
  const data = generateData(),
    values = data.map(item => item.value)

  it("renders barchart", () => {
    // Render a barchart using array data
    const barchart = ReactTestUtils.renderIntoDocument(<BarChart data={data} />)

    // Verify that it has rendered the main chart svg
    const bars = ReactTestUtils.findRenderedDOMComponentWithClass(
      barchart,
      "vizzlo-bar"
    )
    expect(bars).to.exist
    expect(bars.tagName).to.equal("svg")

    // Verify that it has the same number of bars as the array's length
    var barGroup = ReactTestUtils.scryRenderedDOMComponentsWithTag(
      barchart,
      "rect"
    )
    expect(barGroup.length).to.equal(values.length)
  })
})
