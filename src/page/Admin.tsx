import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthContext'

const Admin = () => {
  const {user} = useContext(AuthContext)
  return (
    <div>
      <p>{user.name}

      </p>
      Admin
    </div>
  )
}

export default Admin
