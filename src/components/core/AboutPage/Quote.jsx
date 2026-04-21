import React from 'react'
import HighlightText from '../HomePage/HighlightText'

const Quote = () => {
  return (
    <div>
        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
        <HighlightText text={"combines technology"}/>
        <span className='text-brown-500'>{""} expertise</span>
        , and community to create 
        <span className='text-brown-500'>
            unparalledled educational experience
        </span>
    </div>
  )
}

export default Quote
