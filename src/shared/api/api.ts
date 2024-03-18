import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from '@/shared/const/localStorage';

export const $api = axios.create({
  baseURL: __API__,
});

// For correct work with Server when first loading user data
$api.interceptors.request.use((config) => {
  if (config.headers) {
    config.headers.Authorization = localStorage.getItem(USER_LOCAL_STORAGE_KEY) || '';
  }
  return config;
});
