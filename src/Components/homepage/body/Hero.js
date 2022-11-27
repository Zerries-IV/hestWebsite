import React, { useState } from 'react'
import '../body/styles/Hero.css'
import Logo, { LiveCoinWatchLogo, XeggexLogo } from '../../global/Logo'
import {SOCIALS} from '../../global/SocialIcons'

const Hero = () => {
    const [text] = useState('0xa4C876143891F012991E5e06fABde7D6Ad31E1b0')
    const [alert, setAlert] = useState(false)
    function copyToClipboard(){
        navigator.clipboard.writeText(text)
        setAlert(!alert)
    }
  return (
    <div className='Hero_Body'>
    <div>
    <h1 className='HestIntro'>
        Hey there!!<br />
        <span style={{ color: 'green'}}> Hest is for you.</span>
    </h1>
    <h4 style={{ marginTop: '-40px'}} className="IntroSub"> 
    Welcome to the crypto that would revolutionize the world.
    </h4>
    <p className='IntroPSub'> Hest is new to the Binance ecosystem and has properly adjusted <br />to become the best of its kind</p>
    <div style={{ display: 'flex', gap: '.5rem'}}>
      <button className="MintMeButton">
      <a href="https://xeggex.com/asset/HS">
      <XeggexLogo W = '100px' />
      </a>
      </button>
      <button className="MintMeButton">
      <a href="https://www.livecoinwatch.com/price/HEST-_HS">
      <LiveCoinWatchLogo HEIGHT = '40px' />
      </a>
      </button>
      </div>
    {
        !alert
        ? <div></div>
        : <h1 className="Alert" style={{ 
        marginTop: '5px', color: 'white', backgroundColor: 'green', width:'20%', textAlign: 'center'
        ,borderRadius: '30px', padding: '5px', fontSize: '16px'
        }}>
        COPIED
        </h1>
        
    }
    <div style={{ display: 'flex'}}>
    <h1 style={{ fontSize: '18px', color: 'green'}}
    className="ContractAddress"
    >0xa4C876143891F012991E5e06fABde7D6Ad31E1b0 </h1>
    <img src="https://cdn-icons-png.flaticon.com/512/5993/5993159.png" alt="" width= '20px' height='20px'
        style={{ cursor: 'pointer'}}
        onClick={() => copyToClipboard()}
    />
    </div>
    {/* FOLLOW OUR SOCIALS */}
    <h2 className='JoinUs'> You have an opinion? Join us on</h2>
    <div className='HeroBodySocials'>
    {
        SOCIALS.map(socials => {
            return (
                <a href={socials.link} target="_blank" rel="noopener noreferrer" key={socials.name} className='Social_Img'>
                <img style={{ height: '40px', margin: '10px'}} src={socials.image} alt={socials.name} srcSet=""/>
                </a>
            )
        })
    }
    </div>
    </div>
    <div style={{ maxHeight: '500px', textAlign: 'center'}}>
    <Logo HEIGHT= '100%'/>
    </div>
    </div>
  )   
}

export default Hero
