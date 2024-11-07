import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { EmployeeService } from '@/services'

export const useEmployeeStore = defineStore('employee', () => {
  const state = reactive({
    employees: [],
    employee_data: reactive({
      cpf: '',
      name: '',
      email: '',
      date_birth: null,
      username: '',
      address: {
        cep: '',
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: ''
      },
      telephone: '',
      office: 0,
      date_admission: ''
    }),
    count: 0,
    loading: false,
    error: null
  })
  const isLoading = computed(() => state.loading)

  const getEmployees = async () => {
    state.loading = true
    try {
      state.employees = await EmployeeService.getEmployees()
      state.count = state.employees.length
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const createEmployee = async (newEmployee) => {
    state.loading = true
    try {
      state.employees.push(await EmployeeService.createEmployee(newEmployee))
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const updateEmployee = async (employee) => {
    state.loading = true
    try {
      const index = state.employees.findIndex((s) => s.id === employee.id)
      state.employees[index] = await EmployeeService.updateEmployee(employee)
      state.count = state.employees.length
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const deleteEmployee = async (id) => {
    state.loading = true
    try {
      const index = state.employees.findIndex((s) => s.id === id)
      state.employees.splice(index, 1)
      await EmployeeService.deleteEmployee(id)
      state.count = state.employees.length
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    state,
    isLoading,
    getEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployee
  }
})
