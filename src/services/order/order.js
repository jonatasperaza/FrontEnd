import { api } from '@/plugins/index'
class OrderService {
    async createOrder(order) {
        try {
            const { data } = await api.post('orders/', order);
            return data;
        } catch (error) {
            return error.message;
        }
    }

    async getOrders() {
        try {
            const { data } = await api.get('orders/');
            return data;
        } catch (error) {
            return error.message;
        }
    }

    async getOrder(id) {
        try {
            const { data } = await api.get(`orders/${id}/`);
            return data;
        } catch (error) {
            return error.message;
        }
    }

    async updateOrder(order) {
        try {
            const { data } = await api.patch(`orders/${order.id}/`, order);
            return data;
        } catch (error) {
            return error.message;
        }
    }

    async deleteOrder(id) {
        try {
            const { data } = await api.delete(`orders/${id}/`);
            return data;
        } catch (error) {
            return error.message;
        }
    }
}

export default new OrderService();
