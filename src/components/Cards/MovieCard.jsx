import { Box, Card, CardMedia, Grow } from "@mui/material"
import HoveredCard from "./HoveredCard"

const ImageOverlay = () => {
  return (
    <Box
      sx={{
        background:
          "transparent linear-gradient(180deg, #00000050 0%, #03030300 100%) 0% 0% no-repeat padding-box;",
        height: "100%",
        p: 1,
      }}
    >
      <Box
        sx={{
          height: "100%",
          width: "100%",
          border: "1px solid #E5E5E5",
          borderRadius: "8px",
        }}
      />
    </Box>
  )
}

const MovieCard = ({ movie, focusedMovieId, setFocusedMovieId }) => {
  const handleFocusMovie = () => {
    setFocusedMovieId(movie.id)
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        position: "relative",
        ml: 10,
        mr: -10,
      }}
    >
      <Grow in>
        <Card
          sx={{
            textDecoration: "none",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          onMouseEnter={handleFocusMovie}
        >
          <CardMedia
            image={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            sx={{ height: "100%" }}
          >
            <ImageOverlay />
          </CardMedia>
        </Card>
      </Grow>
      {movie.id === focusedMovieId && (
        <HoveredCard setFocusedMovieId={setFocusedMovieId} movie={movie} />
      )}
    </Box>
  )
}

export default MovieCard
