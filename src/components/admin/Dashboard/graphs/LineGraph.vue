<template>
  <v-chart class="chart" :option="option" />
</template>

<script setup>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart, BarChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";
import { ref, provide } from "vue";

use([
  CanvasRenderer,
  LineChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  GridComponent,
  ToolboxComponent,
  BarChart

]);

provide(THEME_KEY, "dark");

const option = ref({
  title: {
    text: 'FATURAMENTO/BIMESTRE',
    left: 'center',
  },
  backgroundColor: '#070707',
  tooltip: {
    trigger: 'axis',
  },
  toolbox: {
    feature: {
      magicType: { type: ['line', 'bar', 'stack', 'tiled'] },
      restore: {},
      saveAsImage: {}
    }
  },

  xAxis: {
    type: 'category',
    data: ['1° Bimestre', '2° Bimestre', '3° Bimestre', '4° Bimestre', '4° Bimestre', '4° Bimestre', '4° Bimestre', '4° Bimestre', '4° Bimestre',]
  },
  yAxis: {
    type: 'value',
    axisLabel: {
      formatter: '{value} R$'
    }
  },
  series: [
    {
      data: [550, 230, 540, 260, 934, 446, 234, 425, 234],
      type: 'line',
      color: '#01C137',
      markPoint: {
        data: [
          { type: 'max', name: 'Max' },
          { type: 'min', name: 'Min' }
        ]
      },
    }
  ]
});
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