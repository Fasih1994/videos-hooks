import axios from "axios";

const KEY = "AIzaSyA3-sWM9xb8p3dWvfmiGo0INj9a-lL1nqc";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    type: "video",
    key: KEY,
  },
});
