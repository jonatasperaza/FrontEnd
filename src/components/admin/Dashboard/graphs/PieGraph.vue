<template>
  <v-chart class="chart" :option="option" />
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

provide(THEME_KEY, "dark");

const data = ref([
  { value: 290, name: 'Disponiveis' },
  { value: 194, name: 'Em Manutenção' },
  { value: 170, name: 'Em Transito' }
]);

const color = ref(['#FC1D87', '#79036D', '#FFC0CB']);

const option = ref({
  backgroundColor: '#070707',
  title: {
    text: 'Status Do Veiculo',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    data: ['Disponiveis', 'Em Manutenção', 'Em Transito'],
  },
  series: [
    {
      name: 'Status Do Veiculo',
      type: 'pie',
      radius: ['60%', '80%'],
      color: color,
      padAngle: 4,
      data: data,
      itemStyle: {
        borderRadius: 10,
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        },
      },
    }
  ]
});
</script>

<style scoped>
.chart {
  width: 100%;
  height: 400px;
}
</style>