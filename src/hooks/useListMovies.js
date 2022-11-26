import { useQuery } from "react-query"
import { api } from "../api/instance"

const getPopularMovies = () => api.get("/popular").then((res) => res.data)

const useListMovies = () => {
  return useQuery("Movies", getPopularMovies)
}

export default useListMovies
