import { reactive, computed } from "vue";
import { defineStore } from "pinia";
import { OrderService } from "@/services";

export const useOrdersStore = defineStore("orders",
    () => {
        const state = reactive({
            orders: [],
            order: reactive({
            }),
            loading: false,
            error: null
        });
        const isLoading = computed(() => state.loading);
    
        const getOrders = async () => {
            state.loading = true;
            try {
                state.forms = await OrderService.getOrders();
            } catch (error) {
                state.error = error;
            } finally {
                state.loading = false;
            }
        };

        const createOrder = async (newOrder) => {
            state.loading = true;
            try {
                state.orders.push(await OrderService.createOrder(newOrder));
            } catch (error) {
                state.error = error;
            } finally {
                state.loading = false;
            }
        };

        const updateOrder = async (order) => {
            state.loading = true;
            try {
                const index = state.orders.findIndex((s) => s.id === order.id);
                state.orders[index] = await OrderService.updateOrder(order);
            } catch (error) {
                state.error = error;
            } finally {
                state.loading = false;
            }
        };

        const deleteOrder = async (id) => {
            state.loading = true;
            try {
                const index = state.orders.findIndex((s) => s.id === id);
                state.orders.splice(index, 1);
                await OrderService.deleteOrder(id);
            } catch (error) {
                state.error = error;
            } finally {
                state.loading = false;
            }
        };

        return {
            state,
            isLoading,
            getOrders,
            createOrder,
            updateOrder,
            deleteOrder,
        };
    }
)