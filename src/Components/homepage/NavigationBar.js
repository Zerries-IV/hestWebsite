import { Divider } from '@mui/material'
import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Logo, { MintMeLogo, NomicsLogo } from '../global/Logo'
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
    "link": `https://hest.live/wp-content/uploads/2022/10/HEST.pdf`
  },
]

const NavigationBar = () => {
  return (
    <div>
    <div className='Navigation_Body'>
    {/* LOGO */}
      <div style={{ display: 'flex'}} className='Logo_Text'>
      <Logo HEIGHT = '50px' />
      <h1 style={{ margin: '0', fontSize: '40px'}}> Hest</h1>
      </div>
    {/* NAVIGATION */}
    <Navbar style={{ margin: '20px 0 20px 40px'}} className="NavigationForAll">
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
    <div style={{ display: 'flex'}} className="Social_Div">
      {
        SOCIALS.map(socials => {
          return (
            <a href={socials.link} key={socials.name} className="Social_Img">
            <img style={{ height: '40px', margin: '10px'}} src={socials.image} alt={socials.name} srcSet=""/>
            </a>
          )
        })
      }
    </div>
    {/* SWAPS */}
      <div style={{ display: 'flex', gap: '.5rem'}}>
      <button className="MintMeButton">
      <a href="https://www.mintme.com/token/Hest/MINTME/trade">
      <MintMeLogo H = '40px'/>
      </a>
      </button>
      <button className="MintMeButton">
      <a href="https://nomics.com/assets/hs2-hest">
      <NomicsLogo HEIGHT = '40px' />
      </a>
      </button>
      </div>
    </div>
    {/* Navigation bar for 426px and below */}
    <Navbar className="NavigationFor426px">
      <Container>
        <Navbar.Collapse>
          <Nav style={{ fontSize: '12px', fontWeight: 'bold'}} className="NavItems">
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
    <Divider />
    </div>
  )
}

export default NavigationBar
