<script setup>
import { onMounted, ref } from 'vue';

const latitude = ref(null);
const longitude = ref(null);

// Registra o Service Worker
async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      const registration = await navigator.serviceWorker.register('./service-worker.js');
      console.log('Service Worker registrado com sucesso:', registration);
    } catch (error) {
      console.error('Erro ao registrar o Service Worker:', error);
    }
  }
}

// Obtém a localização inicial do usuário
function getInitialLocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      latitude.value = position.coords.latitude;
      longitude.value = position.coords.longitude;
      console.log('Localização inicial obtida:', { latitude: latitude.value, longitude: longitude.value });
    },
    (error) => {
      console.error('Erro ao obter localização inicial:', error);
    }
  );
}

// Atualiza a localização periodicamente
function updateLocationPeriodically() {
  setInterval(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      latitude.value = position.coords.latitude;
      longitude.value = position.coords.longitude;

      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          type: 'update-location',
          location: {
            latitude: latitude.value,
            longitude: longitude.value
          }
        });
        console.log('Localização enviada para o Service Worker:', { latitude: latitude.value, longitude: longitude.value });
      } else {
        console.warn('Service Worker controller não está ativo.');
      }
    });
  }, 10000); // Atualiza a cada 10 segundos
}

// Inicia o rastreamento de localização
function startTracking() {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'start-tracking',
      orderId: 6 // Substitua pelo ID real da ordem
    });
    console.log('Rastreamento iniciado para Order ID 6.');
  } else {
    console.error('Nenhum controlador de Service Worker encontrado.');
  }
}

onMounted(() => {
  registerServiceWorker(); // Registra o Service Worker ao montar o componente
  getInitialLocation(); // Obtém a localização inicial
  updateLocationPeriodically(); // Começa a atualização periódica
});
</script>

<template>
  <div>
    <h1>Localização</h1>
    <p>Latitude: {{ latitude }}</p>
    <p>Longitude: {{ longitude }}</p>
    <button @click="startTracking">Iniciar Rastreamento</button>
  </div>
</template>

<style scoped>
/* Estilização personalizada aqui */
</style>
