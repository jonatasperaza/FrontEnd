import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { OrderService } from '@/services'

export const useOrderStore = defineStore('orders', () => {
  // Helper para calcular datas futuras
  const calculateFutureDate = (daysToAdd) => {
    const date = new Date()
    date.setDate(date.getDate() + daysToAdd)
    return date.toISOString().split('T')[0]
  }

  const state = reactive({
    orders: [],
    order: reactive({
      status: 0,
      id_client: 0,
      delivery: {
        driver_position: '',
        date_preview_delivery: calculateFutureDate(4),
        date_effected_delivery: null,
        date_preview_colect: calculateFutureDate(2),
        date_effected_colect: null
      },
      payment: {
        transaction_amount: 1,
        description: 'Descrição para Um Pedido',
        payment_method_id: 'pix',
        payer_email: '',
        payer_identification_type: '',
        payer_identification_number: '',
        card: null,
        installments: null
      },
      address_delivery: {
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        typeAddress: null
      },
      address_collect: {
        street: '',
        number: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        typeAddress: null
      },
      items: [
        {
          name: '',
          quantity: null,
          observation: '',
          weight: null,
          height: null
        }
      ]
    }),
    loading: false,
    step: 1,
    error: null
  })

  const isLoading = computed(() => state.loading)

  const getOrders = async () => {
    state.loading = true
    try {
      state.orders = await OrderService.getOrders()
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const createOrder = async (newOrder) => {
    state.loading = true
    try {
      // Atualiza as datas antes de enviar
      newOrder.delivery.date_preview_delivery = calculateFutureDate(4)
      newOrder.delivery.date_preview_colect = calculateFutureDate(2)
      state.orders.push(await OrderService.createOrder(newOrder))
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const updateOrder = async (order) => {
    state.loading = true
    try {
      const index = state.orders.findIndex((s) => s.id === order.id)
      state.orders[index] = await OrderService.updateOrder(order)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const deleteOrder = async (id) => {
    state.loading = true
    try {
      const index = state.orders.findIndex((s) => s.id === id)
      state.orders.splice(index, 1)
      await OrderService.deleteOrder(id)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  return {
    state,
    isLoading,
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder
  }
})
