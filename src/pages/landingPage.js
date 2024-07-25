import React from 'react'
import Navbar from '../components/nav'
import Footbar from '../components/foot'
import Main from '../components/main'


function LandingPage() {
  return (
    <div className='body-container'>
        <Navbar/>
        <Main/>
        <Footbar/>
    </div>
  )
}

export default LandingPage
