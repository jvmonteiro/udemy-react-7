import axios from "axios";
import config from "./unplash.config.js";
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${config.key}`
  }
});
