import * as SecureStore from 'expo-secure-store';

export const secureStore = async (key: string, value: string) => {
  return await SecureStore.setItemAsync(key,value);
}

export const getKey = async (key: string) => {
  return await SecureStore.getItemAsync(key);
}

export const deleteKey = async (key: string) => {
  return await SecureStore.deleteItemAsync(key);
}