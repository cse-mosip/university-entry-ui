import axios from "axios";



// const http = axios.create({
//   // baseURL: 'http://localhost:80',
//   // baseURL: "http://104.211.229.43/entry-service/api/v1",
//   baseURL: 'http://localhost:8080/api/v1',
//   withCredentials: true,
//   // headers: {
//   //     'Authorization': `Bearer ${localStorage.getItem('access_token')}`,
//   //     'Content-Type': 'application/json'
//   // }
// });

const http = () => {
  const access_token = localStorage.getItem('access_token');

  return axios.create({
    // baseURL: 'http://localhost:80',
    baseURL: "http://20.84.34.69/entry-service/api/v1",
    // baseURL: 'http://localhost:8080/api/v1',
    withCredentials: true,
    headers: {
        'Authorization': `Bearer ${access_token}`,
        'Content-Type': 'application/json'
    }
  });
}

export default http;
