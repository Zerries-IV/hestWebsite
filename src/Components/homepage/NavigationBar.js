import { Divider } from '@mui/material'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo, { MintMeLogo } from '../global/Logo'
import { SOCIALS } from '../global/SocialIcons'
import '../homepage/styles/NavigationBar.css'

const NAVIGATIONLINKS = [
  {
    "name": 'Trade',
    "link": 'https://www.mintme.com/token/Hest/MINTME/trade'
  },
  {
    "name": 'Roadmap',
    "link": '#ROADMAP'
  },
  {
    "name": 'Airdrop',
    "link": ''
  },
  {
    "name": 'Support',
    "link": '#SUPPORT'
  },
  {
    "name": 'Whitepaper',
    "link": `/white-paper`
  },
]

const NavigationBar = () => {
  return (
    <div>
    <div style={{ margin: '10px 20px', display: 'flex', justifyContent: 'space-between'}}>
    {/* LOGO */}
      <div style={{ display: 'flex'}}>
      <Logo HEIGHT = '50px' />
      <h1 style={{ margin: '0', fontSize: '40px'}}> Hest</h1>
    </div>
    {/* NAVIGATION */}
    <Navbar style={{ margin: '20px 0 20px 40px'}}>
     <Container>
     <Navbar.Collapse>
     <Nav style={{ fontSize: '15px', fontWeight: 'bold'}}>
      {
        NAVIGATIONLINKS.map(navigationlinks => {
          return (
            <Nav.Link className='NavigationLinks' key={navigationlinks.name}
            href={navigationlinks.link}>
            {navigationlinks.name}
            </Nav.Link>
          )
        })
      }
     </Nav>
     </Navbar.Collapse>
     </Container>
    </Navbar>
    {/* SOCIALS */}
    <div style={{ display: 'flex'}}>
      {
        SOCIALS.map(socials => {
          return (
            <a href={socials.link} target="_blank" rel="noopener noreferrer" key={socials.name}>
            <img style={{ height: '40px', margin: '10px'}} src={socials.image} alt={socials.name} srcSet=""/>
            </a>
          )
        })
      }
    </div>
    {/* SWAPS */}
    <div>
      <button className="MintMeButton">
       <MintMeLogo H = '30px'/>
       <h3>Connect to mintMe </h3>
    </button>
    </div>
    </div>
    <Divider />
    </div>
  )
}

export default NavigationBar
