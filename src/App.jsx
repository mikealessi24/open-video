import { Container } from "@mui/material"
import MovieList from "./components/MovieList"
import Navbar from "./components/Navbar"
import Page from "./components/Page"

const App = () => {
  return (
    <Page>
      <Navbar />
      <Container maxWidth="xl">
        <MovieList />
      </Container>
    </Page>
  )
}

export default App
