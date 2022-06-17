import React from 'react'
import logo from '../assets/logo.png'
import { BsFacebook , BsTwitter , BsInstagram } from 'react-icons/bs'
import { FaTiktok } from 'react-icons/fa'

import {
  FooterContainer,
  Upper,
  Lower,
} from '../style/components/_footer'
import { links } from './FooterLink'

const Footer = () => {

  const socialLink = [
    <BsFacebook />,
    <BsTwitter />,
    <BsInstagram />,
    <FaTiktok />,
  ]
  
  return (
    <FooterContainer>

      <Upper>
        <div className="brand-container">
          <div className="brand">
            <img src={logo} alt="logo" />
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <ul>
            {socialLink.map((item,index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="links">
          {links.map(({title, data},index) => (
            <div className="link" key={index}>
              <h4>{title}</h4>
              <ul>
                {data.map((link,index2) => (
                  <li key={index2}>{link}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Upper>
      
      <Lower>
        <span>&copy; Copyright 2022 NFT</span>
        <span>Launching June 2022</span>
      </Lower>

    </FooterContainer>
  )
}

export default Footer