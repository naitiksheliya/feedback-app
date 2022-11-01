import React from 'react'
import {FaTimes} from 'react-icons/fa'
import Cards from './shared/Cards'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
// import { useState } from 'react'


function Feedbackitem({item}) {
  const {deleteFeedback}=useContext(FeedbackContext)
    // const [rating,setRating]=useState(7);
    // const [text,setText]=useState('This is an amzing app');
    // const handleClick=()=>{
    //     setRating((prev)=>{
    //         console.log(prev)
    //         return prev+1
    //     })
    // }


    // const handleClick=(id)=> {
    //   console.log(item.id)
    // }


  return (
    // <div className='card'>
    // <Cards reverse={true}>
    <Cards reverse={true}>
      <div>
        <div className='num-display'>{item.rating}</div>
        <button onClick={()=> deleteFeedback(item.id)} className="colse">
          <FaTimes color='purple'/>
        </button></div>
        <div className='text-display'>{item.text}</div>
      {/* <button onClick={handleClick}>click</button> */}
   </Cards>
  )
}


Feedbackitem.propTypes = {
  item: PropTypes.string,
}


export default Feedbackitem