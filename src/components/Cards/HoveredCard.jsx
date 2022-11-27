import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grow,
  Typography,
} from "@mui/material"
import { Add, Check } from "@mui/icons-material"

const HoveredCard = ({ setFocusedMovieId, movie }) => {
  const handleResetFocus = () => {
    setFocusedMovieId(null)
  }

  return (
    <Grow in>
      <Card
        onMouseLeave={handleResetFocus}
        sx={{
          width: 350,
          height: 500,
          borderRadius: 2,
          border: "4px solid #63ECBC",
          position: "absolute",
          zIndex: 1,
          backgroundColor: "primary.background",
        }}
      >
        <CardMedia
          image={`https://image.tmdb.org/t/p/w400${
            movie.backdrop_path ?? movie.poster_path
          }`}
          sx={{
            aspectRatio: "16/9",
            transition: "transform .75s",
            "&:hover": {
              transform: "scale(1.125)",
            },
          }}
        />
        <CardContent sx={{ height: "50%" }}>
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              color: "white",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {movie.title}
          </Typography>
          <Box sx={{ overflowY: "scroll", height: 150 }}>
            <Typography variant="caption">{movie.overview}</Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ justifyContent: "flex-end" }}>
          {/* <Button
                variant="outlined"
                color="primary"
                size="small"
                endIcon={<Add />}
              >
                Add to my list
              </Button> */}
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            endIcon={<Check />}
          >
            Remove from my list
          </Button>
        </CardActions>
      </Card>
    </Grow>
  )
}

export default HoveredCard
