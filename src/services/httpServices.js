import axios from "axios";

const http = axios.create({
  // baseURL: 'http://localhost:80',
  // baseURL: "http://104.211.229.43/entry-service/api/v1",
  baseURL: 'http://localhost:8080/api/v1',
  withCredentials: true,
  // headers: {
  //     'Content-Type': 'application/json'
  // }
});

export default http;
