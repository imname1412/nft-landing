import React from 'react'
import {
  SignupContainer,
  ContainerRev,
  Content,
  ImgContainer,
} from '../style/sections/_signup'

import signup from '../assets/signup.png'


const Signup = () => {
  return (
    <SignupContainer>
      <ContainerRev>
        <Content>
          <p className="sub-title">Launching Soon🚀</p>
          <h1 className="title">An NFT like no other</h1>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Iste sequi! Aspernatur iure dolore, quo in explicabo asperiores ab
            <br/>
            <span style={{color: 'pink'}}>
              Mint now!!!
            </span>
          </p>
          <button>Sign up</button>
        </Content>
        <ImgContainer>
          <div className="image">
            <img src={signup} alt="home" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </ImgContainer>
      </ContainerRev>
    </SignupContainer>
  )
}

export default Signup