import axios from "axios";

const api = axios.create({
  baseURL: "exp://192.168.43.103:3333"
});

export default api;
