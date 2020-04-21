import axios from 'axios';

export const infoGet = async (endpoint) => {
  const getInfo = await axios.get(`${endpoint}`)
  return getInfo;
}