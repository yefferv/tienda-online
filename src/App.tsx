import { ThemeProvider } from "@emotion/react"
import { theme } from "./styles/themes"
import {
  BrowserRouter as Router
} from "react-router-dom";
import Rutas from "./routers/Rutas";

const App = () => {
    

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Rutas/>
      </Router>
    </ThemeProvider>
    
  )
}

export default App
