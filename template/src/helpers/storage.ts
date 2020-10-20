import AsyncStorage from '@react-native-community/async-storage';

const TOKEN_KEY = '@token';
const USER_KEY = '@user';

export const setToken = async (token: string): Promise<void> => {
  await AsyncStorage.setItem(TOKEN_KEY, token);
};

export const clearToken = async (): Promise<void> => {
  await AsyncStorage.removeItem(TOKEN_KEY);
};

export const getToken = async (): Promise<string | null> => {
  const token = await AsyncStorage.getItem(TOKEN_KEY);
  return token;
};
export const setUser = async (userData: any): Promise<void> => {
  await AsyncStorage.setItem(USER_KEY, JSON.stringify(userData));
};
export const getUser = async (): Promise<any | null> => {
  const user = await AsyncStorage.getItem(USER_KEY);
  return user ? JSON.parse(user) : null;
};
export const clearUser = async (): Promise<void> => {
  await AsyncStorage.removeItem(USER_KEY);
};
