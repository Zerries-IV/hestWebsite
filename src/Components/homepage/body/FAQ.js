import React, { useState } from 'react'
import '../body/styles/FAQ.css'

const FAQ = () => {
    const [a, setA] = useState(false)
    const [b, setB] = useState(false)
  return (
    <div>
        <h1 className="StyleText FAQTop">
            F.A.Q
        </h1>
        <h3 className="StyleTextBottom FAQBottom">
            FREQUENT QUESTIONS
        </h3>
        <div className='FAQ'>
        {/* What does $Hest aim to achieve? */}
            <div style={{
               backgroundColor: '#e9fbe8', borderRadius: '20px',  padding : '5px 20px', 
                cursor: 'pointer', height: 'fit-content !important', width: 'fit-content'
            }}
            onClick={() => setA(!a)}
            >
                {
                    a 
                    ?  
                    <>
                    <h1 style={{ fontSize: '18px', color: 'green'}}> $Hest aims to achieves this</h1>
                    <p style={{ fontSize: '14px', color: 'black'}}>
                    As stated in our Whitepaper; HEST exists to revolutionize problems. 
                    We exist to build effective data
                    without losing sight to facilitate ethical social network and
                    asset. Functioning on developmental concept on buildings and partnership, The
                    rally against standardized networks, Acquiring and scaling digital voting
                    usage, Broaden development towards expansion.HEST aims to on-board first
                    million users into crypto, the value of its network will indeed reach high
                    value.
                    </p>
                    </>
                    :  
                    <h1 style={{ fontSize: '30px', color: 'green',}}
                    className='FAQQuestion'
                    > What does $Hest aim to achieve?</h1>
                }
            </div>
           {/* The reward system */}
           <div style={{
               backgroundColor: '#e9fbe8', borderRadius: '20px',  padding : '5px 20px', 
                cursor: 'pointer', height: 'fit-content !important', width: 'fit-content'
            }}
            onClick={() => setB(!b)}
            >
                {
                    b 
                    ?  
                    <>
                    <h1 style={{ fontSize: '18px', color: 'green'}}> $Hest aims to achieves this</h1>
                    <p style={{ fontSize: '20px', color: 'red'}}>
                    Information coming !!!!
                    </p>
                    </>
                    :  
                    <h1 style={{ fontSize: '30px', color: 'green',}}
                    className='FAQQuestion'
                    > How does the Hest trading system work? Where do I trade?</h1>
                }
            </div>
        </div>
    </div>
  )
}

export default FAQ
