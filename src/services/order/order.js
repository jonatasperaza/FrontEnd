import { api } from '@/plugins/index'
import { toast } from 'vue3-toastify'
import { handleErrorResponse } from '@/utils/errorHandler'

class OrderService {
  async createOrder(order) {
    try {
      const { data } = await api.post('order/', order)
      toast.success('Pedido criado com sucesso')
      return data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao criar pedido')
      console.error(error)
      return error.message
    }
  }

  async getOrders() {
    try {
      const { data } = await api.get('order/')
      toast.success('Pedidos encontrados com sucesso')
      return data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao buscar pedidos')
      return error.message
    }
  }

  async getOrder(id) {
    try {
      const { data } = await api.get(`order/${id}/`)
      console.log(data)
      toast.success('Pedido encontrado com sucesso')
      return data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao buscar pedido')
      return error.message
    }
  }

  async updateOrder(order) {
    try {
      const { data } = await api.patch(`order/${order.id}/`, order)
      toast.success('Pedido atualizado com sucesso')
      return data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao atualizar pedido')
      return error.message
    }
  }

  async deleteOrder(id) {
    try {
      const { data } = await api.delete(`order/${id}/`)
      toast.success('Pedido apagado com sucesso')
      return data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao apagar pedido')
      return error.message
    }
  }
}

export default new OrderService()
