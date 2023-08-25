const API_DEV = 'http://127.0.0.1:8000/'
const API_PROD = 'http://192.210.207.168:5050'

export const API = import.meta.env.DEV ? API_DEV : API_PROD