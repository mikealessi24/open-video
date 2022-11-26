import { Box } from "@mui/material"

const Page = ({ children }) => {
  return (
    <Box
      maxWidth="xl"
      height="100vh"
      width="100vw"
      sx={{ backgroundColor: "primary.background" }}
    >
      {children}
    </Box>
  )
}

export default Page
