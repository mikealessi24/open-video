import { Box } from "@mui/material"
import { Fragment } from "react"
import MovieCard from "./MovieCard"

const MovieList = () => {
  return (
    <Box height="100%" width="100%" display="flex" flexWrap="wrap">
      {[1, 2, 3, 4, 5, 6].map((x) => (
        <Fragment key={x}>
          <MovieCard />
        </Fragment>
      ))}
    </Box>
  )
}

export default MovieList
