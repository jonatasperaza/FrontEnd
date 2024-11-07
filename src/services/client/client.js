import { api } from "@/plugins";

class ClientService {
    async getClients() {
        try {
        const response = await api.get("client");
        return response.data;
        } catch (error) {
        return error.response.data;
        }
    }
    
    async getClient(id) {
        try {
        const response = await api.get(`client/${id}`);
        return response.data;
        } catch (error) {
        return error.response.data;
        }
    }
    
    async createClient(data) {
        try {
        const response = await api.post("client", data);
        return response.data;
        } catch (error) {
        return error.response.data;
        }
    }
    
    async updateClient(id, data) {
        try {
        const response = await api.put(`client/${id}`, data);
        return response.data;
        } catch (error) {
        return error.response.data;
        }
    }
    
    async deleteClient(id) {
        try {
        const response = await api.delete(`client/${id}`);
        return response.data;
        } catch (error) {
        return error.response.data;
        }
    }
}

export default new ClientService();