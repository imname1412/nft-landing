import React from 'react'
import { 
  FreeContainer,
  Container,
  BackGround,
  Content,
  Cards,
} from '../style/sections/_free'
import icon from '../assets/icon.png'
import Card from './Card'
import super1 from '../assets/super1.png'
import release2 from '../assets/release2.png'

const Free = () => {
  return (
    <FreeContainer>

      <Container>
        <BackGround>
          <div className="ellipse pink"></div>
          <div className="ellipse green"></div>
        </BackGround>
        <Content>
            <div className="image">
              <img src={icon} alt="icon" />
            </div>
            <h2 className='title'>
              Free NFT for early birds
            </h2>
            <p className="description">
              Sign up today! and you'll get rekt opps no, get free NFT when we launch
            </p>
        </Content>
      </Container>

      <Cards>
        <div className="card1">
          <Card 
            image={super1}
            series='Floop Series'
            title='Purple Man'
            price={2.99}
            tag={12983}
            time={1}
          />
        </div>
        <div className="card2">
          <Card 
            image={release2}
            series='Gloop Series'
            title='Purple Man'
            price={4.99}
            tag={12983}
            time={1}
          />
        </div>
      </Cards>

      
    </FreeContainer>
  )
}

export default Free