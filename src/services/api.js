import axios from 'axios';

const BASE_URL = "https://myitems-back.herokuapp.com"

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}

function signUp(body) {
  const promise = axios.post(`${BASE_URL}/sign-up`, body);

  return promise;
}
function signIn(body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body);

  return promise;
}

function registerTransaction(body, token){
  const config = createConfig(token)
  const promise = axios.post(`${BASE_URL}/sale`, body , config );
  
    return promise
}

  const api = {
    signUp,
    signIn,
    registerTransaction
  }
  
  export default api;