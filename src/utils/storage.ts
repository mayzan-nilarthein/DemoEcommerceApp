import EncryptedStorage from 'react-native-encrypted-storage';

const saveItem = async (key: string, value: string | object): Promise<void | Error> => {
  try {
    const storedValue = typeof value === 'string' ? value : JSON.stringify(value);
    await EncryptedStorage.setItem(key, storedValue);
  } catch (error) {
    return error as Error;
  }
};

const getItem = async <T = string>(key: string, parseJson: boolean = false): Promise<T | null | Error> => {
  try {
    const value = await EncryptedStorage.getItem(key);
    if (value !== null) {
      return parseJson ? JSON.parse(value) : (value as T);
    }
    return null;
  } catch (error) {
    return error as Error;
  }
};

const clearItem = async (key: string): Promise<void | Error> => {
  try {
    await EncryptedStorage.removeItem(key);
  } catch (error) {
    return error as Error;
  }
};


const clearAll = async (): Promise<void | Error> => {
  try {
    await EncryptedStorage.clear();
  } catch (error) {
    return error as Error;
  }
};

export default {
  getItem,
  saveItem,
  clearItem,
  clearAll,
};
