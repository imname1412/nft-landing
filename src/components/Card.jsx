import React from 'react'
import { 
  CardContainer,
  CardImage,
  CardContent,
} from '../style/components/_card'
import superEth from '../assets/supereth.png'

const Card = ({image , series , title , price , tag , time }) => {
  return (
    <CardContainer>
      <CardImage>
        <img src={image} alt="image" />
      </CardImage>
      <CardContent>
        <div className="heading">
          <span className="series">{series}</span>
          <span className="top">Tob bid</span>
        </div>
        <div className="details">
          <h4 className="title">{title}</h4>
          <div className="price">
            <img src={superEth} alt="super eth" />
            <h4>{price}</h4>
          </div>
        </div>
        <div className="sub-detail">
          <span>#{tag}</span>
          <span>{time} day left</span>
        </div>
      </CardContent>
    </CardContainer>
  )
}

export default Card