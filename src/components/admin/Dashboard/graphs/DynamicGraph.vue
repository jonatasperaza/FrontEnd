<template>
  <v-chart :option="chartOptions" autoresize class="chart" />
</template>

<script setup>
import { CanvasRenderer } from 'echarts/renderers'
import { use } from 'echarts/core'
import { LineChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  VisualMapComponent,
  GridComponent,
  LegendComponent,
  MarkLineComponent
])

provide(THEME_KEY, 'dark')

const data = [
  ['2000-06-05', 116],
  ['2000-06-06', 129],
  ['2000-06-07', 135],
  ['2000-06-08', 86],
  ['2000-06-09', 73],
  ['2000-06-10', 85],
  ['2000-06-11', 73],
  ['2000-06-12', 68],
  ['2000-06-13', 92],
  ['2000-06-14', 130],
  ['2000-06-15', 245],
  ['2000-06-16', 139],
  ['2000-06-17', 115]
]

const chartOptions = ref({
  backgroundColor: '#070707',
  title: {
    text: 'Gráfico de Linhas com ECharts',
    left: 'center'
  },
  toolbox: {
    feature: {
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '10%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Valores'],
    left: '2',
    top: '2'
  },
  xAxis: {
    type: 'category',
    data: data.map((item) => item[0])
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value}'
    },
    markLine: {
      data: [{ type: 'average', name: 'Média' }]
    }
  },
  dataZoom: [
    {
      type: 'slider',
      start: 0,
      end: 100,
      bottom: '5%',
      textStyle: {
        color: '#fff'
      }
    }
  ],

  series: [
    {
      name: 'Valores',
      type: 'line',
      data: data.map((item) => item[1]),
      color: '#fc1d87',
      smooth: true,
      animationDuration: 2000,
      markLine: {
        data: [{ type: 'average', name: 'Média' }]
      },
      areaStyle: {
        color: 'rgba(252, 29, 135, 0.2)'
      }
    }
  ]
})
</script>

<style scoped>
.chart {
  width: 100%;
  height: 400px;
  border: 1px solid #c1c1c1;
  border-radius: 15px;
  overflow: hidden;
}
</style>
