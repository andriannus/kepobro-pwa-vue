import axios from 'axios'

import API from '@/shared/constants/api.constant'

const $axios = axios.create({
  baseURL: API.baseUrl,
  headers: { 'X-Auth-Token': API.token },
  timeout: API.timeout
})
const cancelToken = axios.CancelToken

export { $axios, cancelToken }
