import { createContext, useState } from "react"
import useMovies from "../hooks/useMovies"
import useSearchedMovies from "../hooks/useSearchedMovies"

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [activeSearch, setActiveSearch] = useState("")
  const [myList, setMyList] = useState([])
  const popularMovies = useMovies()
  const searchedMovies = useSearchedMovies(activeSearch)
  const movies = activeSearch ? searchedMovies : popularMovies

  return (
    <AppContext.Provider
      value={{
        movies,
        popularMovies,
        searchedMovies,
        activeSearch,
        setActiveSearch,
        myList,
        setMyList,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
