// import React from 'react'
import { FaQuestion } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function AboutIconLink() {
  return (
    <div className='about-link'>
        {/* <h1>hello</h1> */}
        <Link to='/about'>
        {/* <Link to={{
            pathname:'/about',
            search:'?sort=name',
            hash:'#hello',
        }}> */}
            <FaQuestion size={30}/>
        </Link>
    </div>
  )
}

export default AboutIconLink