import axios from 'axios';

const BASE_URL = "https://myitems-back.herokuapp.com"

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);

  return promise;
}


  const api = {
    signUp
  }
  
  export default api;