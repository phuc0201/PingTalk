import axios from "axios";

export const client = axios.create({
  baseURL: "http://localhost:8080/api/v1",
});

// client.interceptors.request.use(function (config) {
//   if (localStorage.user) {
//     const userStorage = JSON.parse(localStorage.getItem("user"));
//     config.headers.Authorization = `Bearer ${userStorage?.tokens?.access?.token}`;
//   }
//   return config;
// });
