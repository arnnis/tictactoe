const API_DEV = 'http://127.0.0.1:8000/'
const API_PROD = 'https://tictactoe-cag1.onrender.com'

export const API = import.meta.env.DEV ? API_DEV : API_PROD