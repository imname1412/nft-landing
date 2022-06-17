import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import release1 from '../assets/release1.png'
import release2 from '../assets/release2.png'
import { 
  ReleaseContainer,
  Content,
  ImageSection,
  CardContainer,
 } from '../style/sections/_release'
import Card from './Card'

const Release = () => {
  return (
    <ReleaseContainer>

      <div className="release orange">
        <Content>
          <h2 className="title">Initial Release 9/99</h2>
          <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Ipsa deleniti blanditiis animi.
            <a href="#">OpenSea.</a>
          </p>
          <p className="description">Lorem ipsum dolor sit amet.</p>
          <p className="description">50% off Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" className='link'>
            Check them out <BsArrowRight />
          </a>
        </Content>
        <ImageSection>
          <img src={release1} alt="release1" />
          <div className="ellipse pink"></div>
        </ImageSection>
      </div>

      <div className="release green">
        <CardContainer>
          <Card 
            image={release2}
            series='Gloop Series'
            title='Purple Man'
            price={4.99}
            tag={12983}
            time={1}
          />
          <div className="ellipse orange"></div>
        </CardContainer>
        <Content>
          <h2 className="title">Initial Release 9/99</h2>
          <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Ipsa deleniti blanditiis animi.
          <a href="#">OpenSea.</a>
        </p>
          <p className="description">Lorem ipsum dolor sit amet.</p>
          <p className="description">50% off Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <a href="#" className='link'>
            Check them out <BsArrowRight />
          </a>
        </Content>
      </div>

    </ReleaseContainer>
  )
}

export default Release