import { Divider, Typography } from "@mui/material"

const ListHeader = ({ title }) => {
  return (
    <>
      <Typography variant="h1" color="secondary.accent" sx={{ my: 2 }}>
        {title}
      </Typography>
      <Divider sx={{ backgroundColor: "#E5E5E5" }} />
    </>
  )
}

export default ListHeader
