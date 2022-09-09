import axios from 'axios';
export const BASE_URL = 'http://192.168.1.28:8080';

export const myAxios = axios.create({
  baseURL: BASE_URL,
});
