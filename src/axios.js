import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-f0f8e.firebaseio.com/'
});

export default instance;