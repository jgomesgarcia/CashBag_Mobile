import axios from 'axios';
import env from 'react-native-dotenv'

export const apiCashbag = axios.create({
  baseURL: `${env.REACT_APP_API}`,
});   