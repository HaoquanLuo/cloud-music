import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN'
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIMEOUT,
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return error
  }
)

instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error: {
    message: string
    response: {
      status: number
    }
  }) => {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = 'Request Failed.'
          break

        case 401:
          error.message = 'Permission Denied.'
          break

        default:
          throw Error(`Uncaught Error: ${error}`)
      }
    }
    return error
  }
)

export default instance
