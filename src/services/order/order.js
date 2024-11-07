import { api } from '@/plugins/index'
import { toast } from 'vue3-toastify'
import { handleErrorResponse } from '@/utils/errorHandler'

class OrderService {
  async createOrder(order) {
    try {
      const { data } = await api.post('orders/', order)
        toast.success('Pedido criado com sucesso')
      return data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao criar pedido')
      return error.message
    }
  }

  async getOrders() {
    try {
      const { data } = await api.get('orders/')
      toast.success('Pedidos encontrados com sucesso')
      return data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao buscar pedidos')
      return error.message
    }
  }

  async getOrder(id) {
    try {
      const { data } = await api.get(`orders/${id}/`)
        toast.success('Pedido encontrado com sucesso')
      return data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao buscar pedido')
      return error.message
    }
  }

  async updateOrder(order) {
    try {
      const { data } = await api.patch(`orders/${order.id}/`, order)
        toast.success('Pedido atualizado com sucesso')
      return data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao atualizar pedido')
      return error.message
    }
  }

  async deleteOrder(id) {
    try {
      const { data } = await api.delete(`orders/${id}/`)
        toast.success('Pedido apagado com sucesso')
      return data
    } catch (error) {
      handleErrorResponse(error, 'Erro ao apagar pedido')
      return error.message
    }
  }
}

export default new OrderService()
