import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { useEffect } from 'react'

function RatingSelect({select}) {
    const {feedbackEdit} =useContext(FeedbackContext)
    const [selected,setSelected]=useState(10)
    const handleChange = (e) => {
      setSelected(+e.currentTarget.value);
      select(+e.currentTarget.value);
  }
  useEffect(()=>{
    if(feedbackEdit.edit===true){
      setSelected(feedbackEdit.item.rating);
    }
},[feedbackEdit])
  // NOTE: simplified with iteration
  return (
    <div>
    <ul className='rating'>
      {Array.from({ length: 10 }, (_, i) => (
        <li key={`rating-${i + 1}`}>
          <input
            type='radio'
            id={`num${i + 1}`}
            name='rating'
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <label htmlFor={`num${i + 1}`}>{i + 1}</label>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default RatingSelect