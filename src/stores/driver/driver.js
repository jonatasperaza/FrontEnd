import { reactive, computed, ref } from 'vue'
import { defineStore } from 'pinia'
import { DriverService } from '@/services'

export const useDriverStore = defineStore('drivers', () => {
  const state = reactive({
    drivers: ref([]),
    driver: reactive({}),
    count: ref(0),
    loading: ref(false),
    error: null
  })
  const isLoading = computed(() => state.loading)

  const getDrivers = async () => {
    state.loading = true
    try {
      state.drivers = await DriverService.getDrivers()
      state.count = state.drivers.length
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const createDriver = async (newDriver) => {
    state.loading = true
    try {
      state.drivers.push(await DriverService.createDriver(newDriver))
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const updateDriver = async (driver) => {
    state.loading = true
    try {
      const index = state.drivers.findIndex((s) => s.id === driver.id)
      state.drivers[index] = await DriverService.updateDriver(driver)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const deleteDriver = async (id) => {
    state.loading = true
    try {
      await DriverService.deleteDriver(id)
      const index = state.drivers.findIndex((s) => s.id === id)
      state.drivers.splice(index, 1)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    state,
    isLoading,
    getDrivers,
    createDriver,
    updateDriver,
    deleteDriver
  }
})
