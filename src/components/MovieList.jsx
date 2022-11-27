import { Box, CircularProgress, Typography } from "@mui/material"
import { Fragment, useContext, useEffect, useState } from "react"

import { useInView } from "react-intersection-observer"

import MovieCard from "./MovieCards/MovieCard"

import { AppContext } from "../contexts/AppContext"

const MovieList = () => {
  const { ref, inView } = useInView()
  const [focusedMovieId, setFocusedMovieId] = useState(null)
  const { movies } = useContext(AppContext)

  useEffect(() => {
    if (inView) {
      movies.fetchNextPage()
    }
    /* eslint-disable-next-line */
  }, [inView])

  return (
    <Box
      sx={{
        height: "100%",
        overflowY: "scroll",
        display: "flex",
        flexWrap: "wrap",
        px: 12,
      }}
    >
      {movies.data?.pages.map((page, i) => (
        <Fragment key={i}>
          {page.results.map((movie) => (
            <Fragment key={movie.id}>
              <MovieCard
                movie={movie}
                focusedMovieId={focusedMovieId}
                setFocusedMovieId={setFocusedMovieId}
              />
            </Fragment>
          ))}
        </Fragment>
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
