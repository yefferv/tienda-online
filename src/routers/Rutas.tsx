import { Redirect, Route, Switch } from 'react-router-dom'
import DetalleProducto from '../page/DetalleProducto'
import Home from '../page/Home'
import DetalleCarrito from '../page/DetalleCarrito'
import { useState } from 'react'
import Login from '../page/Login/Login'

const Rutas = () => {
  const [userType]= useState('admin')

  return (
        <Switch>
          {userType === 'admin' ? (
          <>
            <Route exact path="/">
              <Login />
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
          ):(

            <Route exact path="/home">
              <Home />
            </Route>

          )}
        </Switch>
  )
}

export default Rutas
