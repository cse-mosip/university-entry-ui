import axios from 'axios';

const http = axios.create({
    // baseURL: 'http://localhost:80',
    baseURL: 'http://localhost:8080/api/v1',
    withCredentials: true,
    // headers: {
    //     'Content-Type': 'application/json'
    // }
});

export default http;