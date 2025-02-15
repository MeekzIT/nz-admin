import axios from "axios";
import { SESSION_KEY_FOR_TOKEN } from "./constants";

// Базовый URL API
const API_BASE_URL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

// Создаем axios-инстанс
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Добавляем интерцептор для автоматического добавления токена
api.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem(SESSION_KEY_FOR_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Универсальная функция GET-запросов
export const getData = async (url: string) => {
  try {
    const response = await api.get(url);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Ошибка при загрузке данных");
  }
};

// Универсальная функция POST-запросов
export const postData = async (url: string, data: any) => {
  try {
    const response = await api.post(url, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Ошибка при отправке данных");
  }
};

// Экспортируем API-инстанс
export default api;
