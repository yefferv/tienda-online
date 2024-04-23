import React from 'react'
import CrNavbar from '../components/CrNavbar'


interface Props {
    children : React.ReactNode
}

const HomeLayaout = ({children}:Props) => {
  return (
    <>
      <CrNavbar/>
      {children}
    </>
  )
}

export default HomeLayaout
