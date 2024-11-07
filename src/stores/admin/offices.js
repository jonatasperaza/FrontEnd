import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { OfficeService } from '@/services'

export const useOfficeStore = defineStore('offices', () => {
  const state = reactive({
    offices: [],
    loading: false,
    error: null
  })
  const isLoading = computed(() => state.loading)

  const getOffices = async () => {
    state.loading = true
    try {
      state.offices = await OfficeService.getOffices()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const createOffice = async (newOffice) => {
    state.loading = true
    try {
      state.offices.push(await OfficeService.createOffice(newOffice))
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const updateOffice = async (office) => {
    state.loading = true
    try {
      const index = state.offices.findIndex((s) => s.id === office.id)
      state.offices[index] = await OfficeService.updateOffice(office)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const deleteOffice = async (id) => {
    state.loading = true
    try {
      const index = state.offices.findIndex((s) => s.id === id)
      state.offices.splice(index, 1)
      await OfficeService.deleteOffice(id)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    state,
    isLoading,
    getOffices,
    createOffice,
    updateOffice,
    deleteOffice
  }
})
