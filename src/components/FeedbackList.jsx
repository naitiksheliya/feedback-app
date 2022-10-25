import React from 'react'
import Feedbackitem from './Feedbackitem'
import PropTypes from 'prop-types'
// import FeedbackData from './Data/FeedbackData'

function FeedbackList({Feedback,handleDelete}) {

    if(!Feedback|| Feedback.length===0){
        return <div> No Data</div>
    }else{
        return (
                <div className='feedback-list'>
                    {Feedback.map((item)=>(
                        <Feedbackitem key={item.id}
                         item={item}
                         handleDelete={handleDelete}
                         />
                    ))}
                </div>
            )
    }
  
}

FeedbackList.propTypes = {
    Feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number,
            text:PropTypes.string,
            rating:PropTypes.number,
        })
    )
  }

export default FeedbackList