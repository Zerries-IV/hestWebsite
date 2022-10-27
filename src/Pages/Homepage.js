import React from 'react'
import Body from '../Components/homepage/Body'
import NavigationBar from '../Components/homepage/NavigationBar'

const Homepage = () => {
  return (
    <div style={{ overflowX: 'hidden'}}>
    <NavigationBar />
    <Body />
    </div>
  )
}

export default Homepage
