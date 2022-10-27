import React from 'react'
import '../body/styles/Secondbody.css'

const WHYHEST = [
    {
        "image": "https://ouch-cdn2.icons8.com/Hh7dUTCyTqLqoZLEikfn2MmkUxPiLr8B2JmvRQ_BbUQ/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDkv/NTg4MWZhZWItMmEy/Ni00ZDUyLTg2YTgt/ZWQ5NzNhZmE4ZTQ0/LnN2Zw.png",
        "text": 'Safe-way to back-up Crypto'
    },
    {
        "image": "https://ouch-cdn2.icons8.com/av_1jXEnnLENCxFGAYH5qWXBQtTEsloJN37BMcdQMwE/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvOTkv/NmFlZTMyZjEtMTRh/YS00YWQ2LTk2ZDUt/Y2UzYzE1M2Y4YjZl/LnN2Zw.png",
        "text": 'Airdrop rewards'
    },
    {
        "image": "https://ouch-cdn2.icons8.com/aQeo2TlQcmlxjZzITQE0kmHF_nUl6ty8T9v_1MLDaVk/rs:fit:256:222/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNDMz/Lzg1YzgwZDlhLTFl/MWMtNGNmYy05NTFk/LTRhZGJmMzI5YjU5/Mi5zdmc.png",
        "text": 'Anti-whale system'
    }
]

const Secondbody = () => {
  return (
    <div style={{ overflowX: 'hidden'}}>
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width="400px" id='SVG'>
        <path fill="#E9FBE8" d="M46.8,-80.1C60.3,-73.3,70.5,-60,78.2,-45.5C85.9,-31.1,91,-15.6,91.7,0.4C92.4,16.3,88.6,32.7,79.3,44.2C69.9,55.8,55,62.6,40.9,67.2C26.7,71.8,13.4,74.1,-1.2,76.2C-15.7,78.2,-31.5,80,-44.9,75C-58.4,70,-69.6,58.3,-78,44.7C-86.5,31.1,-92.3,15.5,-89.9,1.4C-87.6,-12.8,-77.1,-25.7,-67.9,-38C-58.7,-50.4,-50.7,-62.2,-39.6,-70.4C-28.5,-78.7,-14.3,-83.2,1.2,-85.3C16.7,-87.4,33.3,-87,46.8,-80.1Z" transform="translate(100 100)" />
        </svg>
        <div style={{ marginTop: '-350px'}}>
        <h1 className='StyleText'><span className='Dollar_Span'>$</span>HEST</h1>
        <h2 className='StyleTextBottom'> Why Hest? </h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', textAlign: 'center'}}>
            {
                WHYHEST.map(whyhest => {
                    return (
                        <div key={whyhest.text}>
                        <h1 style={{ fontSize: '20px', color: 'green'}}>{whyhest.text}</h1>
                        <img src={whyhest.image} alt="" srcSet='' style={{ width: '150px'}} />
                        </div>
                    )
                })
            }
        </div>
        </div>
        <a id="ROADMAP" href=' '> </a> {/* ANCHOR LINK FOR THIRDBODY*/}
    </div>
  )
}

export default Secondbody
