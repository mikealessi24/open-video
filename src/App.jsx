import { Container } from "@mui/material"
import MovieList from "./components/MovieList"
import Navbar from "./components/Navbar"
import Page from "./components/Page"

const App = () => {
  return (
    <Page>
      <Navbar />
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
