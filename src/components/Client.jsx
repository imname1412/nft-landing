import React from 'react'
import {
  ClientContainer,
  Container,

} from '../style/sections/_client'
import client1 from '../assets/clients1.png'
import client2 from '../assets/clients2.png'
import client3 from '../assets/clients3.png'
import client4 from '../assets/clients4.png'
import client5 from '../assets/clients5.png'

const Client = () => {
  const data = [client1, client2, client3, client4, client5]

  return (
    <ClientContainer>
      <Container>
        {data.map((item , index) => (
          <div className="client" key={index}>
            <img src={item} alt='client' />
          </div>
        ))}
      </Container>
      
    </ClientContainer>
  )
}

export default Client