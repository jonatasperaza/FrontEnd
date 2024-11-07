import { api } from "@/plugins";

class EmployeeService {
    async getEmployees() {
        try {
        const response = await api.get("employe/");
        return response.data;
        } catch (error) {
            console.log(error)
        return error;
        }
    }
    
    async getEmployee(id) {
        try {
        const response = await api.get(`employe/${id}`);
        return response.data;
        } catch (error) {
            console.log(error)
        return error;
        }
    }
    
    async createEmployee(data) {
        try {
        const response = await api.post("employe/", data);
        return response.data;
        } catch (error) {
        console.log(error)
        return error;
        }
    }
    
    async updateEmployee(id, data) {
        try {
        const response = await api.put(`employe/${id}`, data);
        return response.data;
        } catch (error) {
            console.log(error)
        return error;
        }
    }
    
    async deleteEmployee(id) {
        try {
        const response = await api.delete(`employe/${id}`);
        return response.data;
        } catch (error) {
            console.log(error)
        return error;
        }
    }
}

export default new EmployeeService();