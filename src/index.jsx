import React from "react"
import ReactDOM from "react-dom/client"

import App from "./App"
import { ThemeProvider } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import { theme } from "./theme"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import { AppProvider } from "./contexts/AppContext"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: Infinity,
      staleTime: Infinity,
    },
  },
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <QueryClientProvider client={queryClient}>
          <AppProvider>
            <App />
          </AppProvider>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </CssBaseline>
    </ThemeProvider>
  </React.StrictMode>
)
