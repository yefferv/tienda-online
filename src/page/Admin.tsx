import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthContext'
import HomeLayaout from './HomeLayaout'

const Admin = () => {
  const {user} = useContext(AuthContext)

  
  return (
    <div>
      <HomeLayaout numCard={1} handlePayment = {()=>{ }}>
      <div style={{
        display : 'flex',
        flexDirection :'column',
        justifyContent:'center',
        alignItems:'center',
        height:'100vh'
        }}>
          <p>{user.name}

          </p>
           Admin
      </div>
      </HomeLayaout>
      </div>
  )
}

export default Admin
