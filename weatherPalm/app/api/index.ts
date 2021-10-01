import axios from 'axios';

import {WEATHER_API_URL} from '@env';

console.log({WEATHER_API_URL});

export default axios.create({
  baseURL: WEATHER_API_URL,
});
