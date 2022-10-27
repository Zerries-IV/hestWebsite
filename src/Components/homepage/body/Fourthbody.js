import React from 'react'
import '../body/styles/Fourthbody.css'

const TOKENOMICS = [
  {
    "title":"SUPPLY",
    "subTitle": "2 000 000"
  },
  {
    "title":"SYMBOL",
    "subTitle": "$ HS"
  },
  {
    "title":"CHAIN",
    "subTitle": "BEP-20"
  },
  {
    "title":"MARKET",
    "subTitle": "--"
  },
  {
    "title":"PRICE",
    "subTitle": "--"
  },
  {
    "title":"EST.PRICE",
    "subTitle": "> BTC"
  },
]

const Fourthbody = () => {
  return (
    <div style={{ backgroundColor: '#e9e9e6', padding: '10px 40px', overflowX: 'hidden'}}>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"  width='400px' id='SVG3'>
      <path fill="#ffffff" d="M54.6,-64.7C70.8,-51.5,83.9,-34.3,88.2,-14.8C92.5,4.7,88,26.4,77.3,44.4C66.7,62.5,49.9,76.7,30.9,82.8C11.8,88.9,-9.5,86.8,-28.7,79.5C-47.9,72.2,-65.1,59.8,-75.8,42.9C-86.5,26,-90.7,4.6,-86.6,-14.7C-82.5,-34,-70,-51.2,-54.1,-64.5C-38.3,-77.7,-19.2,-86.9,0,-87C19.2,-87,38.4,-77.8,54.6,-64.7Z" transform="translate(100 100)" />
      </svg>
      <br />
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"  width='400px' id='SVG4'>
      <path fill="green" d="M54.6,-64.7C70.8,-51.5,83.9,-34.3,88.2,-14.8C92.5,4.7,88,26.4,77.3,44.4C66.7,62.5,49.9,76.7,30.9,82.8C11.8,88.9,-9.5,86.8,-28.7,79.5C-47.9,72.2,-65.1,59.8,-75.8,42.9C-86.5,26,-90.7,4.6,-86.6,-14.7C-82.5,-34,-70,-51.2,-54.1,-64.5C-38.3,-77.7,-19.2,-86.9,0,-87C19.2,-87,38.4,-77.8,54.6,-64.7Z" transform="translate(100 100)" />
      </svg>
      <div style={{ marginTop: '-250px'}}>
        <h1 className="MetricStyle">
        <span style={{ color: 'green'}}>TO</span>KENOMIC<span style={{ color: 'white'}}>S</span></h1>
        <h2 className="MetricStyleBottom"> HEST</h2>
        <div style={{ display: 'flex', gap: '10%'}}>
        <div className="TokenomicsImage">
          <img src="https://i.ibb.co/Pxt0J97/Screenshot-20221025-114247.png" alt="" srcSet="" />
        </div>
        <div style={{
           height: '500px', overflowY: 'scroll', overflowX: 'hidden'
           }}>
           {
            TOKENOMICS.map(tokenomics => {
              return (
                <div key={tokenomics.title}>
                <h1 className='TokenomicsTitle'>{tokenomics.title}</h1>
                <h2 className='TokenomicsAnswer'>{tokenomics.subTitle}</h2>
                </div>
              )
            })
           }
        </div>
        </div>
      </div>
    </div>
  )
}

export default Fourthbody
