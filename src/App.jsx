import { Box, LinearProgress } from "@mui/material"
import { useContext } from "react"

import MovieList from "./components/Lists/MovieList"
import MyList from "./components/Lists/MyList"
import Navbar from "./components/Navbar"
import Page from "./components/Page"
import { AppContext } from "./contexts/AppContext"

const App = () => {
  const { searchedMovies, myList } = useContext(AppContext)
  return (
    <Page>
      <Navbar />
      {searchedMovies.isLoading && <LinearProgress />}
      <Box
        sx={{
          height: "calc(100% - 64px)",
          overflowY: "scroll",
        }}
      >
        {myList.length > 0 && <MyList />}
        <MovieList />
      </Box>
    </Page>
  )
}

export default App
