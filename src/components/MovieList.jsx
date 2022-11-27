import { Box, CircularProgress, Typography } from "@mui/material"
import { Fragment, useEffect } from "react"
import useMovies from "../hooks/useMovies"
import { useInView } from "react-intersection-observer"

import MovieCard from "./MovieCard"

const MovieList = () => {
  const { ref, inView } = useInView()

  const { data, isLoading, isFetchingNextPage, hasNextPage, fetchNextPage } =
    useMovies()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView, fetchNextPage])

  return (
    <Box sx={{ height: "100%", overflowY: "scroll" }}>
      {data?.pages.map((page, i) => (
        <Box key={i} sx={{ display: "flex", flexWrap: "wrap" }}>
          {page.results.map((movie) => (
            <Fragment key={movie.id}>
              <MovieCard movie={movie} />
            </Fragment>
          ))}
        </Box>
      ))}
      {!isLoading && (
        <Box
          ref={ref}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 2,
          }}
        >
          {!isFetchingNextPage && hasNextPage && (
            <Typography variant="caption" sx={{ mr: 2 }}>
              Loading More
            </Typography>
          )}
          {isFetchingNextPage && (
            <CircularProgress color="secondary" size={20} />
          )}
        </Box>
      )}
    </Box>
  )
}

export default MovieList
