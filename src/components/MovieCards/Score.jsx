import { Box, CircularProgress, Typography } from "@mui/material"

const Score = ({ value }) => {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" color="secondary" value={value} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography fontSize=".5rem" fontWeight={600} color="secondary.accent">
          {value / 10} / 10
        </Typography>
      </Box>
    </Box>
  )
}

export default Score
