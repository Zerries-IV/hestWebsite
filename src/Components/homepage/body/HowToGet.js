import React from 'react'
import '../body/styles/HowToGet.css'

const HowToGet = () => {
  return (
    <div style={{padding: '10px 40px'}} className="HowToGet_Body">
        <h1 className="StyleText Roadmap For426"> HOW I GET</h1>
        <h2 className="StyleTextBottom RoadmapBottom"> $ HEST</h2>
        <div className="StepsToGet">
        {/* CREATE METAMASK */}
        <div style={{ display: 'flex'}}>
        <div>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width='100px' id='#SVG5'>
        <path fill="green" d="M46.9,-22.4C47.2,-14.4,24.4,-6.1,3.4,10.6C-17.6,27.3,-36.9,52.3,-51,47.4C-65.1,42.5,-74.1,7.8,-64.8,-12.7C-55.4,-33.2,-27.7,-39.4,-2.2,-38.7C23.3,-38,46.6,-30.4,46.9,-22.4Z" transform="translate(100 100)" />
        </svg>
            <h3 className="Number" style={{ color: 'white'}}>01</h3>
        </div>
        <div style={{ marginTop: '30px'}}>
            <h2 style={{ color: 'green'}}>Create a MetaMask Wallet</h2>
            <p>
            $HEST token is available on the Binance blockchain. MetaMask is a third party ERC20 & BEP20<br/>
            Browser wallet, and the very best! On Google Chrome, visit 
            <strong>
            <a href="https://www.metamask.io" style={{
                textDecoration: 'none', color: '#000020'
            }}> metamask.io
            </a></strong> to 
            download the extension and set up a wallet. On mobile? Get MetaMask's app for
            <strong>
            <a href="https://metamask.app.link/skAH3BaF99" style={{
                textDecoration: 'none', color: '#000020'
            }}> iPhone</a></strong> or
            <strong>
            <a href="https://metamask.app.link/bxwkE8oF99" style={{
                textDecoration: 'none', color: '#000020'
            }}> Android</a></strong>.
            </p>
        </div>
        </div>
        {/* SEND BNB */}
        <div style={{ display: 'flex'}}>
        <div>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width='100px' id='#SVG5'>
        <path fill="green" d="M46.9,-22.4C47.2,-14.4,24.4,-6.1,3.4,10.6C-17.6,27.3,-36.9,52.3,-51,47.4C-65.1,42.5,-74.1,7.8,-64.8,-12.7C-55.4,-33.2,-27.7,-39.4,-2.2,-38.7C23.3,-38,46.6,-30.4,46.9,-22.4Z" transform="translate(100 100)" />
        </svg>
            <h3 className="Number" style={{ color: 'white'}}>02</h3>
        </div>
        <div style={{ marginTop: '30px'}}>
            <h2 style={{ color: 'green'}}>Send $BNB to MetaMask</h2>
            <p>
            Acquire Binance Smart Chain through MetaMask itself or transfer it to your MetaMask wallet address from 
            another wallet (e.g. Coinbase or Binance).
            </p>
        </div>
        </div>
        {/* Visit Mint Me Swap*/}
        <div style={{ display: 'flex'}}>
        <div>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width='100px' id='#SVG5'>
        <path fill="green" d="M46.9,-22.4C47.2,-14.4,24.4,-6.1,3.4,10.6C-17.6,27.3,-36.9,52.3,-51,47.4C-65.1,42.5,-74.1,7.8,-64.8,-12.7C-55.4,-33.2,-27.7,-39.4,-2.2,-38.7C23.3,-38,46.6,-30.4,46.9,-22.4Z" transform="translate(100 100)" />
        </svg>
            <h3 className="Number" style={{ color: 'white'}}>03</h3>
        </div>
        <div style={{ marginTop: '30px'}}>
            <h2 style={{ color: 'green'}}>Visit
            <strong>
            <a href="https://www.mintme.com/token/hest" style={{
                textDecoration: 'none', color: '#000020'
            }}> mintMe.com</a></strong></h2>
            <p>
            You can currently swap BNB and other tokens for HEST on 
            <strong>
            <a href="https://www.mintme.com/token/hest" style={{
                textDecoration: 'none', color: '#000020'
            }}> mintMe.com</a></strong>,
            MintMe exchange is based on a custom blockchain solution called MintMe.com Coin - smart contracts platform, 
            created for the World Wide Web.
            </p>
        </div>
        </div>
        {/* SWAP FOR HEST */}
        <div style={{ display: 'flex'}}>
        <div>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width='100px' id='#SVG5'>
        <path fill="green" d="M46.9,-22.4C47.2,-14.4,24.4,-6.1,3.4,10.6C-17.6,27.3,-36.9,52.3,-51,47.4C-65.1,42.5,-74.1,7.8,-64.8,-12.7C-55.4,-33.2,-27.7,-39.4,-2.2,-38.7C23.3,-38,46.6,-30.4,46.9,-22.4Z" transform="translate(100 100)" />
        </svg>
            <h3 className="Number" style={{ color: 'white'}}>04</h3>
        </div>
        <div style={{ marginTop: '30px'}}>
            <h2 style={{ color: 'green'}}>Swap BNB for HEST</h2>
            <p>
            Enter the amount of $BNB you would like to swap for $HEST. Click <strong style={{ color: 'gray'}}>
             Connect Wallet
            </strong> then
            <strong style={{ color: 'gray'}}>
             Swap
            </strong>
            </p>
        </div>
        </div>
        </div>
    </div>
  )
}

export default HowToGet
