import axios from 'axios';

const client = axios.create({
  baseURL: process.env.API_URI || 'http://localhost:3000/',
});

export default client;
