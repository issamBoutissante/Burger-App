import axios from "axios";

const instance = axios.create({
  baseURL: "https://delecious-burger.firebaseio.com/",
});

export default instance;
