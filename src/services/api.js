import axios from 'axios';

const BASE_URL = "https://myitems-back.herokuapp.com"

function createConfig(token) {
  return { headers: { Authorization: `Bearer ${token}` } };
}


  const api = {
    
  }
  
  export default api;