import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Toolbar,
} from "@mui/material"
import { Search } from "@mui/icons-material"
import { useContext, useState } from "react"
import { AppContext } from "../contexts/AppContext"

const Navbar = () => {
  const { setActiveSearch } = useContext(AppContext)
  const [searchVal, setSearchVal] = useState("")

  const handleChange = (e) => {
    if (e.target.value === "") {
      setActiveSearch("")
    }
    setSearchVal(e.target.value)
  }

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleSearch()
    }
  }

  const handleSearch = () => {
    setActiveSearch(searchVal)
  }

  return (
    <Box sx={{ flex: 0 }}>
      <AppBar position="static" color="primary">
        <Toolbar
          disableGutters
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Avatar
            alt="Open Video Logo"
            src="logo_transparent.png"
            sx={{ width: 64, height: 64, position: "absolute", left: 8 }}
          />
          <TextField
            value={searchVal}
            onKeyDown={handleKeypress}
            onChange={handleChange}
            placeholder="Search a movie title..."
            variant="outlined"
            size="small"
            sx={{ width: "60%" }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={handleSearch}>
                    <Search
                      fontSize="small"
                      sx={{ color: "primary.background" }}
                    />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar
