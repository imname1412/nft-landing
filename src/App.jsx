import React from 'react'
import styled from 'styled-components'
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

function App() {
  return (
    <AppContainer>
      <ScrollToTop />
      <Navbar />
      <Home />
      <Free />
      <Client />
      <SuperRare />
      <Release />
      <Like />
      <Singup />
      <Footer />
    </AppContainer>
  )
}

export default App


