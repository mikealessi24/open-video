import { Box, LinearProgress } from "@mui/material"
import { useContext } from "react"

import MovieList from "./components/MovieList"
import MyList from "./components/MyList"
import Navbar from "./components/Navbar"
import Page from "./components/Page"
import { AppContext } from "./contexts/AppContext"

const App = () => {
  const { searchedMovies } = useContext(AppContext)
  return (
    <Page>
      <Navbar />
      {searchedMovies.isLoading && <LinearProgress />}
      <Box
        sx={{
          height: "calc(100% - 64px)",
        }}
      >
        <MyList />
        <MovieList />
      </Box>
    </Page>
  )
}

export default App
