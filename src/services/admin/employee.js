import { api } from '@/plugins'
import { toast } from 'vue3-toastify'
import { handleErrorResponse } from '@/utils/errorHandler'

class EmployeeService {
  async getEmployees() {
    try {
      const response = await api.get('employe/')
      toast.success('Funcionários encontrados com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao buscar funcionários')
      return error
    }
  }

  async getEmployee(id) {
    try {
      const response = await api.get(`employe/${id}`)
      toast.success('Funcionário encontrado com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao buscar funcionário')
      return error
    }
  }

  async createEmployee(data) {
    try {
      const response = await api.post('employe/', data)
      toast.success('Funcionário criado com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao criar funcionário')
      return error
    }
  }

  async updateEmployee(id, data) {
    try {
      const response = await api.put(`employe/${id}`, data)
      toast.success('Funcionário atualizado com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao atualizar funcionário')
      return error
    }
  }

  async deleteEmployee(id) {
    try {
      const response = await api.delete(`employe/${id}`)
      toast.success('Funcionário apagado com sucesso')
      return response.data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao apagar funcionário')
      return error
    }
  }
}

export default new EmployeeService()
