import { api } from "@/plugins";

class OfficeService {
    async getOffices() {
        try {
        const response = await api.get("offices");
        return response.data;
        } catch (error) {
        return error.response.data;
        }
    }
    
    async getOffice(id) {
        try {
        const response = await api.get(`office/${id}`);
        return response.data;
        } catch (error) {
        return error.response.data;
        }
    }
    
    async createOffice(data) {
        try {
        const response = await api.post("offices", data);
        return response.data;
        } catch (error) {
        return error.response.data;
        }
    }
    
    async updateOffice(id, data) {
        try {
        const response = await api.put(`offices/${id}`, data);
        return response.data;
        } catch (error) {
        return error.response.data;
        }
    }
    
    async deleteOffice(id) {
        try {
        const response = await api.delete(`offices/${id}`);
        return response.data;
        } catch (error) {
        return error.response.data;
        }
    }
}

export default new OfficeService();