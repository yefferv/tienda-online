import { Redirect, Route, Switch } from 'react-router-dom'
import { useContext, useState } from 'react'



interface PrivateRouterProps {
    children : React.ReactNode
  }
  
  const PrivateRouter = ({children}:PrivateRouterProps)=>{
    //const {AuthState} =  useContext(AuthContext)
    //return (AuthState.isAuth ? children : <Redirect to='/login'/>)}
    return (children)
  }

  export default  PrivateRouter
