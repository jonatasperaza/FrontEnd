import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { OrderService } from '@/services'
import { useCepStore } from '../address/cep'

export const useOrderStore = defineStore('orders', () => {
  // Helper para calcular datas futuras
  const calculateFutureDate = (daysToAdd) => {
    const date = new Date()
    date.setDate(date.getDate() + daysToAdd)
    return date.toISOString().split('T')[0]
  }

  const cepStore = useCepStore()

  const state = reactive({
    orders: [],
    currentOrder: null,
    order: reactive({
      status: 0,
      id_client: 0,
      delivery: {
        driver_position: ' ',
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
        cep: 0,
        street: '',
        number: 0,
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        typeAddress: 0
      },
      address_collect: {
        cep: 0,
        street: '',
        number: 0,
        complement: '',
        neighborhood: '',
        city: '',
        state: '',
        typeAddress: 1
      },
      items: []
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

  const getOrder = async (id) => {
    state.loading = true
    try {
      state.currentOrder = await OrderService.getOrder(id)
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
      const nowOrder = await OrderService.createOrder(newOrder)
      state.orders.push(nowOrder)
    } catch (error) {
      state.error = error
    } finally {
      state.loading = false
    }
  }

  const getAddressByCep = async (cep, type) => {
    state.loading = true
    try{
      const addres = await cepStore.getEndereco(cep)
      if (type == "collect"){
        state.order.address_collect.street = addres.logradouro
        state.order.address_collect.neighborhood = addres.bairro
        state.order.address_collect.city = addres.localidade
        state.order.address_collect.state = addres.uf
        console.log(addres)
      }
      else if (type == "delivery"){
        state.order.address_delivery.street = addres.logradouro
        state.order.address_delivery.neighborhood = addres.bairro
        state.order.address_delivery.city = addres.localidade
        state.order.address_delivery.state = addres.uf
        console.log(addres)
      }
    }
    catch(error){
      state.error = error
      console.log(error)
    }
    finally{
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
    deleteOrder,
    getAddressByCep,
    getOrder
  }
})
