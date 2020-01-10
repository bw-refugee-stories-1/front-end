import axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axios.create({
    baseURL: 'https://testing-refugee-stories.herokuapp.com',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    },
  });
}

export default axiosWithAuth;