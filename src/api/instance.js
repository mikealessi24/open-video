import axios from "axios"

export const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie",
  params: {
    api_key: `${process.env.REACT_APP_API_KEY}`,
  },
})
