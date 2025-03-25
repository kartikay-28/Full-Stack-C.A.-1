import React from 'react';
import './App.css';
import TestimonialCard from './components/TestimonialCard'

function App() {
  return (
  <div>
    <h1>Our Reviews</h1>
    <ol>
    <li><TestimonialCard name = "Emily Watson" review = "This service was amazing and Highly recommended."></TestimonialCard></li>
    <li><TestimonialCard name = "Diven Saini" review = "This service was good but some issues in deploying"></TestimonialCard></li>
    <li><TestimonialCard name = "Akshit" review = "This service was good"></TestimonialCard></li>
    <li><TestimonialCard name = "Aryaman" review = "This service was great"></TestimonialCard></li>

    </ol>
  </div>
  )
}

export default App
