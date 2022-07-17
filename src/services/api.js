import Axios from 'axios';

const API = Axios.create({  
    baseURL: 'https://api.github.com/' 
});

export default API;
