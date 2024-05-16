import { Redirect, Route, Switch } from 'react-router-dom'
import DetalleProducto from '../page/DetalleProducto'
import Home from '../page/Home'
import DetalleCarrito from '../page/DetalleCarrito'
import { useState } from 'react'
import Login from '../page/Login/Login'
import Admin from '../page/Admin'
import PrivateRouter from './PrivateRouter'


const Rutas = () => {
  const [userType]= useState('admin')

  return (
        <Switch>
          <>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/admin">
              <PrivateRouter>
               <Admin />
              </PrivateRouter>
            </Route>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/detalles/:slug">
              <DetalleProducto/>
            </Route>
            <Route exact path="/carrito">
              <DetalleCarrito/>
            </Route>
            <Redirect to="/home" />

          </>  
        
        </Switch>
  )
}

export default Rutas
