import React from 'react';
import {SplideSlide} from '@splidejs/react-splide';


const SingleSlide = ({bg,content}) => {
  return (
    <SplideSlide style={{
        backgroundImage: `url(${bg})`
    }}>
    
    {content}
    
    
    
    </SplideSlide>
  )
}

export default SingleSlide