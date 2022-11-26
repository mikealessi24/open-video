import { AppBar, Box, Toolbar } from "@mui/material"

const Navbar = () => {
  return (
    <Box sx={{ flex: 0 }}>
      <AppBar position="static" color="primary" sx={{ height: 57 }}>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            "&.MuiToolbar-root": {
              minHeight: 75,
            },
          }}
        ></Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
