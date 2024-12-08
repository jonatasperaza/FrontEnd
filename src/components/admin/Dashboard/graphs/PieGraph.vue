<template>
  <v-chart class="chart" :option="option" autoresize/>
</template>

<script setup>
import { ref, provide, onMounted, watch } from 'vue'
import { CanvasRenderer } from 'echarts/renderers'
import { use } from 'echarts/core'
import { PieChart } from 'echarts/charts'
import { TitleComponent, TooltipComponent, LegendComponent, GridComponent, ToolboxComponent } from 'echarts/components'
import VChart, { THEME_KEY } from 'vue-echarts'
import { useVehicleStore } from '@/stores'

// Store
const VehicleStore = useVehicleStore()

// Registrar componentes do ECharts
use([CanvasRenderer, PieChart, TitleComponent, TooltipComponent, LegendComponent, GridComponent, ToolboxComponent])

// Definir tema
provide(THEME_KEY, 'dark')

// Dados do gráfico
const data = ref([])
const color = ['#D24783', '#A75478', '#FC2B86', '#7D5466']

// Buscar dados
onMounted(async () => {
  await VehicleStore.getVehicles()
  data.value = [
    { value: VehicleStore.state.countRunning, name: 'Em Transito' },
    { value: VehicleStore.state.countInMaintenance, name: 'Em Manutenção' },
    { value: VehicleStore.state.countStopped, name: 'Disponiveis' },
    { value: VehicleStore.state.countBroken, name: 'Quebrados' }
  ]
})

// Configuração do gráfico
const option = ref({
  backgroundColor: '#070707',
  title: {
    text: 'Status Dos Veiculos',
    left: 'center',
    textStyle: {
      color: '#fff'
    },
    subtextStyle: {
      color: '#ccc'
    }
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    textStyle: {
      color: '#fff'
    }
  },
  toolbox: {
    feature: {
      restore: {},
      saveAsImage: {}
    }
  },
  tooltip: {
    trigger: 'item',
    formatter: (params) => {
      return `
        <b>${params.seriesName}</b><br>
        ${params.marker} ${params.name}: <b>${params.value}</b> (${params.percent}%)
      `
    },
    textStyle: {
      color: '#fff'
    },
    backgroundColor: 'rgba(50, 50, 50, 0.8)',
    borderColor: '#777',
    borderWidth: 1
  },
  series: [
    {
      name: 'Status Do Veiculo',
      type: 'pie',
      radius: ['50%', '70%'],
      center: ['50%', '58%'],
      color: color,
      label: {
        show: true,
        formatter: (params) => {
          let tooltip = `${params.name}: \n ${params.value} (${params.percent}%)`
          return tooltip
        },
        fontSize: 10,

        color: '#fff',
      },
      labelLine: {
        show: true,
        length: 8,
        lineStyle: {
          color: '#ccc'
        }
      },
      data: data.value,
      itemStyle: {
        borderRadius: 8,
        borderColor: '#000',
        borderWidth: 1
      },
      emphasis: {
        scale: true,
        scaleSize: 15,
        label: {
          show: true,
          fontSize: 12,
          fontWeight: 'bold',
        },
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ],
animation: 'auto',  
animationDuration: 1000,
animationDurationUpdate: 500,
animationEasing: 'cubicInOut',
animationEasingUpdate: 'cubicInOut',
animationThreshold: 2000,
progressiveThreshold: 3000,
progressive: 400,
hoverLayerThreshold: 3000,

})

// Atualizar gráfico quando os dados mudarem
watch(data, (newData) => {
  option.value.series[0].data = newData
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
