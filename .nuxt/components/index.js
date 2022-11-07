export { default as Footer } from '../../components/Footer.vue'
export { default as TopNav } from '../../components/TopNav.vue'
export { default as ChartsArea } from '../../components/charts/Area.vue'
export { default as ChartsBarChart } from '../../components/charts/BarChart.vue'
export { default as ChartsBubble } from '../../components/charts/Bubble.vue'
export { default as ChartsDoughnutChart } from '../../components/charts/DoughnutChart.vue'
export { default as ChartsLineChart } from '../../components/charts/LineChart.vue'
export { default as ChartsMixed } from '../../components/charts/Mixed.vue'
export { default as ChartsPie } from '../../components/charts/Pie.vue'
export { default as ChartsPolarArea } from '../../components/charts/PolarArea.vue'
export { default as ChartsRadar } from '../../components/charts/Radar.vue'
export { default as ChartsScatter } from '../../components/charts/Scatter.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
