import { Box } from "@mui/material"
import { Fragment, useContext, useState } from "react"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { AppContext } from "../../contexts/AppContext"
import MovieCard from "../MovieCards/MovieCard"
import ListHeader from "./ListHeader"

const MyList = () => {
  const { myList } = useContext(AppContext)
  const [focusedMovieId, setFocusedMovieId] = useState(null)

  return (
    <Box sx={{ px: 12 }}>
      <ListHeader title="MyList" />
      <Box
        sx={{
          display: "flex",
          pb: 14,
          overflowX: "scroll",
        }}
      >
        {myList.map((movie) => (
          <Fragment key={movie.id}>
            <MovieCard
              movie={movie}
              focusedMovieId={focusedMovieId}
              setFocusedMovieId={setFocusedMovieId}
            />
          </Fragment>
        ))}
      </Box>
    </Box>
  )
}

export default MyList
