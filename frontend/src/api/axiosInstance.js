import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://quizrush-4j74.onrender.com', // backend URL
});

export default axiosInstance;