import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
    <div className="card-container" onClick={handleClick}>
      <CardBanner />
      <CardContent />
    </div>
  )
}

const handleClick = function() {
  window.location = 'https://www.reactjs.org';
}

export default CardContainer;
