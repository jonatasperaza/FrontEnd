import { reactive, computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { VehicleService } from '@/services'

export const useVehicleStore = defineStore('vehicles', () => {
  const state = reactive({
    vehicles: ref([]),
    vehicle: reactive({}),
    count: ref(0),
    countRunning: ref(0),
    countInMaintenance: ref(0),
    countStopped: ref(0),
    countBroken: ref(0),
    loading: ref(false),
    error: null
  })
  const isLoading = computed(() => state.loading)

  const getVehicles = async () => {
    state.loading = true
    try {
      state.vehicles = await VehicleService.getVehicles()
      state.count = state.vehicles.length
      state.countRunning = state.vehicles.filter((v) => v.status === 1).length
      state.countInMaintenance = state.vehicles.filter((v) => v.status === 2).length
      state.countStopped = state.vehicles.filter((v) => v.status === 3).length
      state.countBroken = state.vehicles.filter((v) => v.status === 4).length
      
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const createVehicles = async (newVehicle) => {
    state.loading = true
    try {
      state.vehicles.push(await VehicleService.createVehicle(newVehicle))
      getVehicles()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const updateVehicles = async (vehicle) => {
    state.loading = true
    try {
      const index = state.vehicles.findIndex((s) => s.id === vehicle.id)
      state.vehicles[index] = await VehicleService.updateVehicle(vehicle)
      getVehicles()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const deleteVehicles = async (id) => {
    state.loading = true
    try {
      await VehicleService.deleteVehicle(id)
      const index = state.vehicles.findIndex((s) => s.id === id)
      state.vehicles.splice(index, 1)
       getVehicles()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    state,
    isLoading,
    getVehicles,
    createVehicles,
    updateVehicles,
    deleteVehicles
  }
})
