import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StarRating = ({ rating }) => {
  const stars = Array.from({ length: Math.floor(rating) }, (_, index) => (
    <FontAwesomeIcon key={index} icon={faStar} />
  ));

  return <div>{stars}</div>;
};

export default StarRating;