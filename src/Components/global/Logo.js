import React from 'react'
import "../../App.css"

const LogoImg = 'images/logo.png'

const Logo = (props) => {
  return (
    <img src={LogoImg} className= "App-logo" srcSet='' alt='Logo' height={props.HEIGHT}/>
  )
}

export default Logo
