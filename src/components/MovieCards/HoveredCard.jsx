import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grow,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material"
import { Add, CheckCircleRounded } from "@mui/icons-material"
import { useContext } from "react"
import { AppContext } from "../../contexts/AppContext"
import Score from "./Score"

const HoveredCard = ({ setFocusedMovieId, movie }) => {
  const { myList, setMyList } = useContext(AppContext)

  const isAddedToList = Boolean(myList.find((x) => x.id === movie.id))

  const handleResetFocus = () => {
    setFocusedMovieId(null)
  }

  const addtoList = () => {
    setMyList([...myList, { ...movie }])
  }

  const removeFromList = () => {
    const filtered = myList.filter((x) => x.id !== movie.id)
    setMyList(filtered)
  }

  return (
    <Grow in>
      <Card
        onMouseLeave={handleResetFocus}
        sx={{
          width: 350,
          height: 475,
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
        <CardContent sx={{ height: 220 }}>
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
        <CardActions sx={{ justifyContent: "space-between" }}>
          <Score value={movie.vote_average * 10} />
          {!isAddedToList && (
            <Tooltip title="Add to my list" placement="top">
              <IconButton
                variant="outlined"
                size="small"
                color="secondary"
                onClick={addtoList}
              >
                <Add />
              </IconButton>
            </Tooltip>
          )}
          {isAddedToList && (
            <Tooltip title="Remove from my list" placement="top">
              <IconButton
                variant="contained"
                color="secondary"
                size="small"
                onClick={removeFromList}
              >
                <CheckCircleRounded />
              </IconButton>
            </Tooltip>
          )}
        </CardActions>
      </Card>
    </Grow>
  )
}

export default HoveredCard
