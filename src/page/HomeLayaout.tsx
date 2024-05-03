import React from 'react'
import CrNavbar from '../components/CrNavbar'


interface Props {
    children : React.ReactNode
    numCard : number
    handlePayment : () => void
}

const HomeLayaout = ({children, numCard, handlePayment}:Props) => {
  return (
    <>
      <CrNavbar numCard={numCard} handlePayment = {handlePayment}/>
      {children}
    </>
  )
}

export default HomeLayaout
