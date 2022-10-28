import React from 'react'
import Cards from '../components/shared/Cards'
import { Link } from 'react-router-dom'
function AboutPage() {
  return (
    <Cards>
      <div className="about">
        <h1>About This Project</h1>
        <p>This is a perfect app to leave feedback for a product or a service</p>
        <p> Version: 1.0.0</p>
        <p>
          <Link to="/">Back to homePage</Link>
        </p>
      </div>
    </Cards>
  )
}

export default AboutPage