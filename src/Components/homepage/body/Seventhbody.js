import React from 'react'
import Logo, { MintMeLogo } from '../../global/Logo'
import { SOCIALS } from '../../global/SocialIcons'

const Seventhbody = () => {
  return (
    <div>
   <div style={{ backgroundColor: 'green', padding: '20px 30px', margin: '50px 0 0 0'}}>
    <h1 style={{ color: 'white', fontSize: '60px'}}>
        Welcome to the community
        <br />
        Join the community and its partners 
    </h1>
    {
        SOCIALS.map(socials => {
            return (
                <a href={socials.link} target="_blank" rel="noopener noreferrer" key={socials.name}>
                <img style={{ height: '40px', margin: '10px'}} src={socials.image} alt={socials.name} srcSet=""/>
                </a>
            )
        })
    }
    <div style={{ display: 'flex', justifyContent: 'space-between'}}>
        <Logo HEIGHT = '200px'/>
        <MintMeLogo H = '200px' />
    </div>
   </div>
   <div style={{ display: 'flex', 
   backgroundColor: 'white', 
   padding: '0 !important', textAlign: 'center',  
   color: 'green',
   justifyContent: 'space-around'}}>
        <h3 style={{ margin: '3px',}}> Copyright ©2022, HestLabs</h3>
        <h4 style={{ margin: '3px',}}> Donate ❤️: 0xa4C876143891F012991E5e06fABde7D6Ad31E1b0</h4>
    </div>
    <a id="SUPPORT" href=' '> </a> {/* ANCHOR LINK FOR THISBODY*/}
   </div>
  )
}

export default Seventhbody
