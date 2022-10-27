import React from 'react'
import { motion ,AnimatePresence} from 'framer-motion'
import {useState} from 'react'
import Cards from './shared/Cards'
import RatingSelect from './RatingSelect'
import Buttons from './Buttons'
// import { setFlagsFromString } from 'v8'

function FeedbackForm({handleAdd}) {
    const [text,setText] = useState('')
    const [btnDisabled,setbtnDisabled] = useState(true)
    const [message,setMessage] = useState('')
    const [rating,setRating] = useState(10)
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(text.trim().length>=10){
            const newFeedback={
                text,
                rating,
            }
            handleAdd(newFeedback);
            setText(' ')
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