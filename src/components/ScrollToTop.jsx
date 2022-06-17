import React , { useState } from 'react'
import { BsChevronUp } from 'react-icons/bs'
import {
  ScrollContainer,
} from '../style/components/_scrollToTop'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  window.addEventListener('scroll' , () => {
    window.scrollY > 100 ? setVisible(true) : setVisible(false)
  })

  return (
    <ScrollContainer isScroll={visible}>
      <a href="#">
        <BsChevronUp />
      </a>
    </ScrollContainer>
  )
}

export default ScrollToTop