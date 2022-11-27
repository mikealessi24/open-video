import { Container, LinearProgress } from "@mui/material"
import { useContext } from "react"

import MovieList from "./components/MovieList"
import Navbar from "./components/Navbar"
import Page from "./components/Page"
import { AppContext } from "./contexts/AppContext"

const App = () => {
  const { searchedMovies } = useContext(AppContext)
  return (
    <Page>
      <Navbar />
      {searchedMovies.isLoading && <LinearProgress />}
      <Container
        maxWidth="xl"
        sx={{
          height: "calc(100% - 64px)",
        }}
      >
        <MovieList />
      </Container>
    </Page>
  )
}

export default App
