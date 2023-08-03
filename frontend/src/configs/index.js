import axios from "axios";

const instance = axios.create({
  baseURL: `${process.env.REACT_APP_HOST_HEROKU}api/v1`,
});

export default instance;
