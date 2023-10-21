import axios from 'axios';

const { MY_IP } = process.env;

const api = axios.create({
  baseURL: `http://121.0.0.1:19003/people/`
});

export default api;