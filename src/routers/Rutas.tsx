import { Route, Switch } from 'react-router-dom'
import DetalleProducto from '../page/DetalleProducto'
import Home from '../page/Home'

const Rutas = () => {

  return (
    <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/detalles/:slug">
            <DetalleProducto/>
          </Route>
        </Switch>
  )
}

export default Rutas
