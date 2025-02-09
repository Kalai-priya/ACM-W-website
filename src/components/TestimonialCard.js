import React from 'react';
import './TestimonialCard.css';
import profilePic1 from './profile1.png';
import profilePic2 from './quote.png';

const TestimonialCard = ({ testimonial, isActive }) => {
  return (
    <div className={`testimonial-card ${isActive ? 'active' : ''}`}>
      <div className="testimonial-image">
      <img src={profilePic2} className='myquote' alt={testimonial.name} />
      </div>
        <div className="profile-pic">
          <img src={profilePic1} alt={testimonial.name} />
        </div>
        <div className="testimonial-author">
          <span className="author-name">{testimonial.name}</span>
          <span className="author-role">{testimonial.role}</span>
        </div>
      <div className="testimonial-content">

        <p className="testimonial-quote">{testimonial.quote}</p>
        
      </div>
    </div>
  );
};

export default TestimonialCard;
