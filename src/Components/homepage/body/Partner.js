import React from 'react'
import { LiveCoinWatchLogo, MintMeLogo, NomicsLogo, XeggexLogo } from '../../global/Logo'
import '../body/styles/Footer.css'
import '../body/styles/Partner.css'

const Partner = () => {
  return (
    <div style={{ overflowX: 'hidden', overflowY: 'hidden'}} className='PartnerBody'>
    <h1 className='StyleText Roadmap' ><span style={{ color: 'green'}}>P</span>ARTNER</h1>
    <div className="PartnerLogo">
        <a href="https://www.mintme.com/token/Hest/MINTME/trade">
        <MintMeLogo H = '100px' />
        </a>
        <a href="https://xeggex.com/asset/HS">
        <XeggexLogo W = '300px'/>
        </a>
        <a href="https://www.livecoinwatch.com/price/HEST-_HS">
            <LiveCoinWatchLogo HEIGHT = '100px'/>
        </a>
        <a href="https://nomics.com/assets/hs2-hest">
           <NomicsLogo HEIGHT = '100px'/>
        </a>
    </div>
    </div>
  )
}

export default Partner