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
import { ref, provide, onMounted } from "vue";
import { useVehicleStore } from "@/stores";

const VehicleStore = useVehicleStore();

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent
]);

provide(THEME_KEY, "dark");
const data = ref([]);
onMounted(async() => {
  await VehicleStore.getVehicles();
  data.value = [
    { value: VehicleStore.state.countRunning, name: "Em Transito" },
    { value: VehicleStore.state.countInMaintenance, name: "Em Manutenção" },
    { value: VehicleStore.state.countStopped, name: "Disponiveis" },
    { value: VehicleStore.state.countBroken, name: "Quebrados" }
  ];
})

const color = ref(['#FC1D87', '#79036D', '#FFC0CB', '#FF1493']);

const option = ref({
  backgroundColor: '#070707',
  title: {
    text: 'Status Dos Veiculos',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
    formatter: '{a} <br/>{b} : {c} ({d}%)',
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
  border: 1px solid #c1c1c1;
  border-radius: 15px;
  overflow: hidden;
}
</style>