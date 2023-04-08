const devBaseUrl = 'http://123.207.32.32:9000/'
const prodBaseUrl = ''

export const BASE_URL =
  process.env.NODE_ENV === 'development' ? devBaseUrl : prodBaseUrl

export const TIMEOUT = 5000
