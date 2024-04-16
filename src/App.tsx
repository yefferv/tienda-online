import { ThemeProvider } from "@emotion/react"
import Home from "./page/Home"
import { theme } from "./styles/themes"


const App = () => {
    

  return (
    <ThemeProvider theme={theme}>
      <Home></Home>
    </ThemeProvider>
    
  )
}

export default App
