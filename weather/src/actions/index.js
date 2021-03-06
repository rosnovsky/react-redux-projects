import keys from '../keys.js';
import axios from 'axios';

export const FETCH_WEATHER = "FETCH_WEATHER";

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${keys.API_KEY}`;

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url)
  .catch(error => {
    if (error.response) {
      return axios.get(`${ROOT_URL}&q=New%20York`);
    }
  });

  return {  
    type: FETCH_WEATHER,
    payload: request
  }

  
}