import { Box } from "@mui/material"
import { Fragment } from "react"
import useListMovies from "../hooks/useListMovies"

import MovieCard from "./MovieCard"

const MovieList = () => {
  const { data } = useListMovies()

  return (
    <Box
      height="100%"
      width="100%"
      display="flex"
      flexWrap="wrap"
      sx={{ overflowY: "scroll" }}
    >
      {data?.results.map((movie) => (
        <Fragment key={movie.id}>
          <MovieCard movie={movie} />
        </Fragment>
      ))}
    </Box>
  )
}

export default MovieList
