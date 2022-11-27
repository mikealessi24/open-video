import { useInfiniteQuery } from "react-query"
import { api } from "../api/instance"

const getMoviesbySearch = (pageParam, searchVal) =>
  api
    .request({
      url: "/search/movie",
      params: {
        page: pageParam,
        query: searchVal,
      },
    })
    .then((res) => res.data)

const useSearchedMovies = (searchVal) => {
  return useInfiniteQuery(
    ["MoviesWithSearch", searchVal],
    ({ pageParam = 1 }) => getMoviesbySearch(pageParam, searchVal),
    {
      getNextPageParam: (page) => {
        if (page.page < page.total_pages) {
          return page.page + 1
        } else {
          return undefined
        }
      },
      enabled: Boolean(searchVal),
      onError: (err) => {
        console.error(err)
      },
    }
  )
}

export default useSearchedMovies
