import React from 'react'
import RareData from './RareData'
import {
  Rare,
  TitleContainer,
  RareCards,

} from '../style/sections/_superRare'
import Card from './Card'

const SuperRare = () => {
  return (
    <Rare>
      <TitleContainer>
        <h2 className="title">Super Rare</h2>
        <p className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing 
          elit. Ipsa deleniti blanditiis animi.
          <a href="#">OpenSea.</a>
        </p>
      </TitleContainer>
      <RareCards>
        {RareData.map((item , index) => (
          <Card
            key={index}
            image={item.image}
            series={item.series}
            title={item.title}
            price={item.price}
            tag={item.tag}
            time={item.time}
          />
        ))}
      </RareCards>
    </Rare>
  )
}

export default SuperRare