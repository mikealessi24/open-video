import { Box, CircularProgress, Typography } from "@mui/material"
import { Fragment, useContext, useEffect } from "react"

import { useInView } from "react-intersection-observer"

import MovieCard from "./MovieCard"

import { AppContext } from "../contexts/AppContext"

const MovieList = () => {
  const { ref, inView } = useInView()
  const { movies } = useContext(AppContext)

  useEffect(() => {
    if (inView) {
      movies.fetchNextPage()
    }
    /* eslint-disable-next-line */
  }, [inView])

  return (
    <Box sx={{ height: "100%", overflowY: "scroll" }}>
      {movies.data?.pages.map((page, i) => (
        <Box key={i} sx={{ display: "flex", flexWrap: "wrap" }}>
          {page.results.map((movie) => (
            <Fragment key={movie.id}>
              <MovieCard movie={movie} />
            </Fragment>
          ))}
        </Box>
      ))}
      {!movies.isLoading && (
        <Box
          ref={ref}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            my: 2,
          }}
        >
          {!movies.isFetchingNextPage && movies.hasNextPage && (
            <Typography variant="caption" sx={{ mr: 2 }}>
              Loading More
            </Typography>
          )}
          {movies.isFetchingNextPage && (
            <CircularProgress color="secondary" size={20} />
          )}
        </Box>
      )}
    </Box>
  )
}

export default MovieList
