import { useInfiniteQuery } from "react-query"
import { api } from "../api/instance"

const getPopularMovies = (pageParam) =>
  api
    .request({
      url: "/popular",
      params: {
        page: pageParam,
      },
    })
    .then((res) => res.data)

const useMovies = () => {
  return useInfiniteQuery(
    ["Movies"],
    ({ pageParam = 1 }) => getPopularMovies(pageParam),
    {
      getNextPageParam: (page) => {
        if (page.page < page.total_pages) {
          return page.page + 1
        } else {
          return undefined
        }
      },
      onError: (err) => {
        console.error(err)
      },
    }
  )
}

export default useMovies
