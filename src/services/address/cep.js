import axios from 'axios'

class CepService {
  async getCep(cep) {
    const response = await axios.get(`https://viacep.com.br/ws/${cep}/json`)
    console.log(response.data)
    return response.data
  }
}

export default new CepService
