import React from 'react'
import { 
  HomeContainer ,
  Container,
  Content,
  ImgContainer,

} from '../style/sections/_home'
import home from '../assets/home.png'

const Home = () => {
  return (
    <HomeContainer>
      <Container>
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
            <img src={home} alt="home" />
          </div>
          <div className="ellipse-container">
            <div className="ellipse pink"></div>
            <div className="ellipse orange"></div>
          </div>
        </ImgContainer>
      </Container>
    </HomeContainer>
  )
}

export default Home