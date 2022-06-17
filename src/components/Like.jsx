import React from 'react'
import eth1 from '../assets/eth1.png'
import eth2 from '../assets/eth2.png'
import { 
  LinkContainer,
  Container,
  Content,
 } from '../style/sections/_like'


const Like = () => {
  return (
    <LinkContainer>
      <Container>

        <Content>
          <div className="image">
            <img src={eth1} alt="eth" />
          </div>
          <h2 className="title">Lorem ipsum dolor sit amet </h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint atque consequatur?
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint atque consequatur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque perspiciatis veniam ducimus?
          </p>
        </Content>

        <Content>
          <div className="image">
            <img src={eth2} alt="eth" />
          </div>
          <h2 className="title">Lorem ipsum dolor sit amet </h2>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint atque consequatur?
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis sint atque consequatur?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quo repellendus inventore?
          </p>
        </Content>

      </Container>
    </LinkContainer>
  )
}

export default Like