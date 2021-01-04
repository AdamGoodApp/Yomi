import * as SecureStore from 'expo-secure-store';

export const store = async (key: string, value: string) => {
  return await SecureStore.setItemAsync(key,value);
}

export const getKey = async (key: string) => {
  return await SecureStore.getItemAsync(key);
}