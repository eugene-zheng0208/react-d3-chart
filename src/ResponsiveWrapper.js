import React, { Component } from "react"

export default ChartComponent =>
  class ResponsiveChart extends Component {
    constructor(props) {
      super(props)
      this.state = {
        containerWidth: null
      }

      this.fitParentContainer = this.fitParentContainer.bind(this)
    }

    componentDidMount() {
      this.fitParentContainer()
      window.addEventListener("resize", this.fitParentContainer)
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.fitParentContainer)
    }

    fitParentContainer() {
      const { containerWidth } = this.state,
        currentContainerWidth = this.chartContainer.getBoundingClientRect()
          .width,
        shouldResize = containerWidth !== currentContainerWidth

      if (shouldResize) {
        this.setState({
          containerWidth: currentContainerWidth
        })
      }
    }

    renderChart() {
      const parentWidth = this.state.containerWidth

      return <ChartComponent {...this.props} parentWidth={parentWidth} />
    }

    render() {
      const { containerWidth } = this.state,
        shouldRenderChart = containerWidth !== null

      return (
        <div
          ref={el => {
            this.chartContainer = el
          }}
        >
          {shouldRenderChart && this.renderChart()}
        </div>
      )
    }
  }
