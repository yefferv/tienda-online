import { Redirect, Route, Switch } from 'react-router-dom'
import DetalleProducto from '../page/DetalleProducto'
import Home from '../page/Home'
import DetalleCarrito from '../page/DetalleCarrito'
import { useState } from 'react'
import Login from '../page/Login/Login'
import Admin from '../page/Admin'

const Rutas = () => {
  const [userType]= useState('admin')

  return (
        <Switch>
            <Route exact path="/login">
              <Login />
            </Route>            
            <Route exact path="/admin">
              <Admin />
            </Route>
          {userType === 'admin' ? (
          <>
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
