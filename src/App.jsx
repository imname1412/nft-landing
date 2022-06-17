import React , { useState, useEffect }from 'react'
import {
  Navbar ,
  Card ,
  Client ,
  Footer ,
  Free ,
  Home ,
  Like ,
  Release ,
  ScrollToTop ,
  Singup ,
  SuperRare 
} from './components'
import { AppContainer } from './style/base/_app'
import ScrollReveal from 'scrollreveal'

function App() {

  const registerAnimate = () => {
    const options = {
      origin: 'bottom',
      distance: '80px',
      duration: 2000,
      reset: false,
    }
    const configScroll = ScrollReveal(options)
    configScroll.reveal('#nav,#home,#free,#client,#super-rare,#release,#like,#signup,#footer'
      ,
      {interval: 500}
      )
  }
  

  useEffect(() => {
    registerAnimate()
  } , [])

  return (
    <AppContainer>
      <ScrollToTop />
      <div id="nav">
        <Navbar  />
      </div>
      <div id='home' >
        <Home />
      </div>
      <div id='free'>
        <Free />
      </div>
      <div id='client'>
        <Client />
      </div>
      <div id='super-rare'>
        <SuperRare />
      </div>
      <div id='release'>
        <Release />
      </div>
      <div id='like'>
        <Like />
      </div>
      <div id='signup'>
        <Singup />
      </div>
      <div id='footer'>
        <Footer />
      </div>
    </AppContainer>
  )
}

export default App


