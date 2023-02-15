import axios from "axios";
const apiAxios = axios.create({
  baseURL: "https://app-autenticacao-d436c-default-rtdb.firebaseio.com",
});
export default apiAxios;
