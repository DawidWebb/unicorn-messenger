import axios from "axios";

const request = axios.create({
  baseURL: "https://unicorn-messenger.herokuapp.com/",
  // baseURL: "http://localhost:8000",

  validateStatus: false,
});

export default request;
