import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-6f1af.cloudfunctions.net/api",
  // http://localhost:5001/clone-6f1af/us-central1/api
});

export default instance;
