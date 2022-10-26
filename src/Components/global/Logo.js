import React from 'react'
import "../../App.css"
import { useNavigate } from 'react-router'

const LogoImg = 'images/logo.png'
const MintMe = 'https://s2.coinmarketcap.com/static/img/coins/200x200/3361.png'

const Logo = (props) => {
  const navigate = useNavigate()
  return (
      <img src={LogoImg} className= "App-logo" srcSet='' alt='Logo' height={props.HEIGHT}
      onClick={() => navigate('/')}
      />
  )
}

export const MintMeLogo = (props) => {
  return (
      <img src={MintMe} alt='Logo' className= "App-logo" srcSet="" style={{ height: props.H}}
      />
  )
}

export default Logo
