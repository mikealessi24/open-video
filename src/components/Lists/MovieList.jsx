import { Box, CircularProgress, Typography } from "@mui/material"
import { Fragment, useContext, useEffect, useState } from "react"

import { useInView } from "react-intersection-observer"

import MovieCard from "../MovieCards/MovieCard"

import { AppContext } from "../../contexts/AppContext"
import ListHeader from "./ListHeader"

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
    <Box sx={{ px: 12, height: "100%" }}>
      <ListHeader title="Popular Movies" />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          postion: "relative",
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
    </Box>
  )
}

export default MovieList
