import React from 'react'
import Feedbackitem from './Feedbackitem'
// import PropTypes from 'prop-types'
import {motion , AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
// import FeedbackData from './Data/FeedbackData'

// function FeedbackList({Feedback,handleDelete}) {
function FeedbackList() {
    const {feedback} =useContext(FeedbackContext)
    if(!feedback|| feedback.length===0){
        return <div> No Data</div>
    }else{
        return (
                <div className='feedback-list'>
                    <AnimatePresence>
                    {feedback.map((item)=>(
                        <motion.div
                        key={item.id}
                        initial={{opacity:0}}
                        animate={{opacity:1}}
                        exit={{opacity:0}}
                        >
                        <Feedbackitem key={item.id}
                         item={item}
                        //  handleDelete={handleDelete}
                         />
                         </motion.div>
                    ))}
                    </AnimatePresence>
                </div>
            )
    }
  
}

// FeedbackList.propTypes = {
//     Feedback: PropTypes.arrayOf(
//         PropTypes.shape({
//             id:PropTypes.number,
//             text:PropTypes.string,
//             rating:PropTypes.number,
//         })
//     )
//   }

export default FeedbackList