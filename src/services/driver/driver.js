import { api } from '@/plugins/index'
class DriverService {
    async createDriver(driver) {
        try {
            const { data } = await api.post('driver/', driver);
            return data;
        } catch (error) {
            return error.message;
        }
    }

    async getDrivers() {
        try {
            const { data } = await api.get('driver/');
            return data;
        } catch (error) {
            return error.message;
        }
    }

    async getDriver(id) {
        try {
            const { data } = await api.get(`driver/${id}/`);
            return data;
        } catch (error) {
            return error.message;
        }
    }

    async updateDriver(driver) {
        try {
            const { data } = await api.patch(`driver/${driver.id}/`, driver);
            return data;
        } catch (error) {
            return error.message;
        }
    }

    async deleteDriver(id) {
        try {
            const { data } = await api.delete(`driver/${id}/`);
            return data;
        } catch (error) {
            return error.message;
        }
    }
}

export default new DriverService()
