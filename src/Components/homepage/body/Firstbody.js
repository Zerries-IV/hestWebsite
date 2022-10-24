import React from 'react'
import '../body/styles/Firstbody.css'
import Logo from '../../global/Logo'
import {SOCIALS} from '../../global/SocialIcons'

const Firstbody = () => {
  return (
    <div style={{ display: 'flex', gap: '2%', margin: '0 20px',}}>
    <div>
    <h1 className='HestIntro'>
        Hey there!!<br />
        <span style={{ color: 'green'}}> Hest is for you.</span>
    </h1>
    <h4 style={{ marginTop: '-40px'}}> Welcome to the crypto that would revolutionize the world.</h4>
    <p> Hest is new to the Binance ecosystem and has properly adjusted <br />to become the best of its kind</p>
    <button className="PancakeButton">
        Let's get started on Pancake
    </button>
    {/* FOLLOW OUR SOCIALS */}
    <h2> You have an opinion? Join us on</h2>
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
    <div>
    <Logo HEIGHT= '100%'/>
    </div>
    </div>
  )
}

export default Firstbody
