import axios from "axios";

export default axios.create({
  baseURL: '',
  Headers: {
    'Content-type': 'application/json',
  },
});
