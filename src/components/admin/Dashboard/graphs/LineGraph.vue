<template>
  <v-chart class="chart" :option="option" autoresize />
</template>

<script setup>
import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { LineChart, BarChart } from 'echarts/charts'
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent,
  DataZoomComponent
} from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { ref, provide } from 'vue'

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent,
  BarChart,
  DataZoomComponent
])

// Definir tema
provide(THEME_KEY, 'dark')

const option = ref({
  title: {
    text: 'FATURAMENTO/BIMESTRE',
    left: 'center',
    textStyle: {
      color: '#fff',
      fontSize: 20
    }
  },
  backgroundColor: '#070707',
  tooltip: {
    trigger: 'axis',
    backgroundColor: 'rgba(50, 50, 50, 0.8)',
    borderColor: '#777',
    borderWidth: 1,
    textStyle: {
      color: '#fff'
    },
    formatter: (params) => {
      let tooltip = `<b>${params[0].axisValue}</b><br/>`
      params.forEach((item) => {
        tooltip += `${item.marker} ${item.seriesName}: <b>${item.value} R$</b><br/>`
      })
      return tooltip
    }
  },
  toolbox: {
    feature: {
      magicType: { type: ['line', 'bar'] },
      restore: {},
      saveAsImage: {}
    }
  },
  legend: {
    data: ['Faturamento'],
    left: 'left',
    textStyle: {
      color: '#fff'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '10%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    axisLabel: {
      color: '#ccc',
      fontSize: 12
    },
    axisLine: {
      lineStyle: {
        color: '#ccc'
      }
    },
    data: [
      '1° Bimestre',
      '2° Bimestre',
      '3° Bimestre',
      '4° Bimestre',
      '5° Bimestre',
      '6° Bimestre',
      '7° Bimestre',
      '8° Bimestre',
      '9° Bimestre'
    ]
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} R$',
      color: '#ccc',
      fontSize: 12
    },
    axisLine: {
      lineStyle: {
        color: '#ccc'
      }
    },
    splitLine: {
      lineStyle: {
        color: 'rgba(200, 200, 200, 0.2)'
      }
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
      name: 'Faturamento',
      data: [550, 230, 540, 260, 934, 446, 234, 425, 234],
      type: 'line',
      color: '#01C137',
      smooth: true, // Linhas suavizadas
      markPoint: {
        data: [
          { type: 'max', name: 'Máximo' },
          { type: 'min', name: 'Mínimo' }
        ],
        label: {
          color: '#fff'
        }
      },
      markLine: {
        data: [{ type: 'average', name: 'Média' }],
        lineStyle: {
          color: '#ffcc00',
          width: 2
        },
        label: {
          color: '#fff'
        }
      },
      areaStyle: {
        color: 'rgba(1, 193, 55, 0.2)'
      },
      emphasis: {
        focus: 'series',
        itemStyle: {
          borderColor: '#fff',
          borderWidth: 2
        }
      }
    }
  ],
  animationDuration: 2000, // Duração da animação
  animationEasing: 'elasticOut' // Estilo da animação
})
</script>

<style scoped>
.chart {
  width: 100%;
  height: 77vh;
  border: 1px solid #c1c1c1;
  border-radius: 15px;
  overflow: hidden;
}
</style>
