import React, { Component } from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import BarChart from "./bar-chart"
import PieChart from "./pie-chart"
import data from "./data"

class App extends Component {
  constructor() {
    super()
    this.state = { data }
  }

  randomize(arr) {
    return arr.map(elem => ({
      title: elem.title,
      value: Math.floor(Math.random() * 2 * elem.value)
    }))
  }

  onValueChange() {
    this.setState({
      data: this.randomize(data)
    })
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>React-D3-Charts</h1>
        </div>
        <Tabs>
          <TabList>
            <Tab>Bar Chart</Tab>
            <Tab>Pie Chart</Tab>
            <span className="tab-btn" onClick={this.onValueChange.bind(this)}>
              Randomize
            </span>
          </TabList>
          <TabPanel>
            <div className="chart-container">
              <BarChart data={this.state.data} />
            </div>
          </TabPanel>
          <TabPanel>
            <PieChart data={this.state.data} />
          </TabPanel>
        </Tabs>
      </div>
    )
  }
}

export default App
