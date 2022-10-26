import React from 'react'
import '../body/styles/Thirdbody.css'

const ROADMAPLIST = [
    {
        "true": 'https://cdn-icons-png.flaticon.com/128/5290/5290076.png',
        "false": 'https://cdn-icons-png.flaticon.com/64/7698/7698976.png',
        "item": ' Telegram Launch',
        "done": true
    },
    {
        "true": 'https://cdn-icons-png.flaticon.com/128/5290/5290076.png',
        "false": 'https://cdn-icons-png.flaticon.com/64/7698/7698976.png',
        "item": ' Website Launch',
        "done": true
    },
    {
        "true": 'https://cdn-icons-png.flaticon.com/128/5290/5290076.png',
        "false": 'https://cdn-icons-png.flaticon.com/64/7698/7698976.png',
        "item": ' Whitepaper Launch',
        "done": true
    },
    {
        "true": 'https://cdn-icons-png.flaticon.com/128/5290/5290076.png',
        "false": 'https://cdn-icons-png.flaticon.com/64/7698/7698976.png',
        "item": ' Airdrop',
        "done": true
    },
    {
        "true": 'https://cdn-icons-png.flaticon.com/128/5290/5290076.png',
        "false": 'https://cdn-icons-png.flaticon.com/64/7698/7698976.png',
        "item": ' Pool making',
        "done": true
    },
    {
        "true": 'https://cdn-icons-png.flaticon.com/128/5290/5290076.png',
        "false": 'https://cdn-icons-png.flaticon.com/64/7698/7698976.png',
        "item": ' Migration to BSC',
        "done": true
    },
    {
        "true": 'https://cdn-icons-png.flaticon.com/128/5290/5290076.png',
        "false": 'https://cdn-icons-png.flaticon.com/64/7698/7698976.png',
        "item": ' Website Update',
        "done": true
    },
    {
        "true": 'https://cdn-icons-png.flaticon.com/128/5290/5290076.png',
        "false": 'https://cdn-icons-png.flaticon.com/64/7698/7698976.png',
        "item": ' Member growth',
        "done": true
    },
    {
        "true": 'https://cdn-icons-png.flaticon.com/128/5290/5290076.png',
        "false": 'https://cdn-icons-png.flaticon.com/64/7698/7698976.png',
        "item": ' Listing',
        "done": true
    },
    {
        "true": 'https://cdn-icons-png.flaticon.com/128/5290/5290076.png',
        "false": 'https://cdn-icons-png.flaticon.com/64/7698/7698976.png',
        "item": ' More to be revealed',
        "done": false
    },
]

const Thirdbody = () => {
  return (
    <div style={{ backgroundColor: '#e9e9e6', padding: '10px 0'}}>
    {/* ANCHOR LINK FOR THIRDBODY IN SECONDBODY*/}
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" width='500px' id='SVG2'>
     <path fill="#FFFFFF" d="M45.2,-15.2C54.2,13,54.1,43.6,36.4,58.4C18.8,73.2,-16.4,72.1,-34.5,56.7C-52.7,41.4,-53.7,11.8,-45.1,-15.8C-36.5,-43.5,-18.3,-69.2,-0.1,-69.2C18.1,-69.1,36.2,-43.4,45.2,-15.2Z" transform="translate(100 100)" />
     </svg>
    <div style={{ marginTop: '-350px'}}>
    <h1 className='StyleText'><span style={{ color: 'green'}}>R</span>OADMAP</h1>
     <h2 className='StyleTextBottom'> Here's what lies ahead</h2>
    </div>
    <h3 style={{ color: 'green', textAlign: 'center'}}>All phases</h3>
    <div className='RoadmapList'>
    {
        ROADMAPLIST.map(roadmaplist => {
            return(
                <div style={{ display: 'flex'}} key={roadmaplist.item}>
                <img src={
                    roadmaplist.done
                    ? roadmaplist.true
                    : roadmaplist.false
                } alt="tick" srcSet='' style={{ width: '30px', height: '30px'}}/>
                <h3 style={{ color: '#ffffff'}}>{roadmaplist.item}</h3>
                </div>
            )
        })
    }
    </div>
    </div>
  )
}

export default Thirdbody
