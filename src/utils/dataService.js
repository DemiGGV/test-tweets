import axios from 'axios';
axios.defaults.baseURL = 'https://652689f2917d673fd76c7d8a.mockapi.io/api';

export const fetchTweets = async () => {
  try {
    const response = await axios.get('/tweetsDB');
    return response.data;
  } catch (err) {
    return err.message;
  }
};

export const saveLStorage = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

export const loadLStorage = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export const removeLStorage = key => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};
