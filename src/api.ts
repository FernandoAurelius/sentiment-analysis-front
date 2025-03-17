import axios from 'axios'

// Usamos a URL base vazia para que as requisições
// sejam tratadas pelo proxy configurado no Vite
export default axios.create({
  baseURL: '/api',
  headers: {
    'Content-type': 'application/json',
  },
  // Desativando withCredentials para evitar problemas quando estamos usando proxy
  withCredentials: false,
})
