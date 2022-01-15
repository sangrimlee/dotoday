import { STORAGE_KEY } from '@/constants/storage';
import { StorageKeyType } from '@/types';

export const getLocalStorage = (key: StorageKeyType) =>
  localStorage.getItem(STORAGE_KEY[key]);

export const setLocalStorage = (key: StorageKeyType, value: string) =>
  localStorage.setItem(STORAGE_KEY[key], value);
