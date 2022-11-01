import React from 'react'
import { motion ,AnimatePresence} from 'framer-motion'
import {useState} from 'react'
import Cards from './shared/Cards'
import RatingSelect from './RatingSelect'
import Buttons from './Buttons'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import { useEffect } from 'react'
// import { setFlagsFromString } from 'v8'

function FeedbackForm() {
    // const {handleAdd} =useContext(FeedbackContext)
    const [text,setText] = useState('')
    const [btnDisabled,setbtnDisabled] = useState(true)
    const [message,setMessage] = useState('')
    const [rating,setRating] = useState(10)
    const {addFeedback ,feedbackEdit,updateFeedback} =useContext(FeedbackContext)
    useEffect(()=>{
        if(feedbackEdit.edit===true){
            setbtnDisabled(false)
            setText(feedbackEdit.item.text)
            setRating(feedbackEdit.item.rating)
        }
    },[feedbackEdit])
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.trim().length>=10){
            const newFeedback={
                text,
                rating,
            }
            if(feedbackEdit.edit===true){
                updateFeedback(feedbackEdit.item.id,newFeedback)
            }
            else{
            addFeedback( newFeedback);
            }setText(' ')
        }
    }
    const handleTextchange=(e)=>{
        // console.log(e.target.value);
        if(text===''){
            setbtnDisabled(true)
            setMessage(null)
        }else if(text.trim().length<=10){
            setbtnDisabled(true)
            setMessage('review should be of minimum 10 charecters')
        }else{
            setMessage(null)
            setbtnDisabled(false)

        }
        setText(e.target.value)
    }
  return (
    <Cards>
        <form onSubmit={handleSubmit}>
            <h2>How would you rate your service with us?</h2>
            <RatingSelect select={(rating) => setRating(rating)}/>
            <div className="input-group">
                <input type="text" placeholder='write a review' onChange={handleTextchange} value={text} />
                <Buttons type='submit' version='secondary' isDisabled={btnDisabled}>
                Send
                </Buttons>
            </div>
            {message && <div className='message'>{message}</div>}
        </form>
    </Cards>
  )
}

export default FeedbackForm