import { Box, Card, CardMedia, Grow } from "@mui/material"

const ImageOverlay = () => {
  return (
    <Box
      sx={{
        background:
          "transparent linear-gradient(180deg, #00000093 0%, #03030300 100%) 0% 0% no-repeat padding-box;",
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

const MovieCard = () => {
  return (
    <Grow in>
      <Card
        sx={{
          textDecoration: "none",
          borderRadius: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        onMouseEnter={() => console.log("on?")}
        onMouseLeave={() => console.log("off?")}
      >
        <CardMedia
          image="https://m.media-amazon.com/images/I/A1UTpJzoPBL._RI_.jpg"
          sx={{ aspectRatio: "16/9", height: "100%" }}
        >
          <ImageOverlay />
        </CardMedia>
      </Card>
    </Grow>
  )
}

export default MovieCard
