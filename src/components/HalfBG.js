import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';



const HalfBG = ({ className = '', bgClassName = 'c-bg-light-gray', children = null }) => {
  const _bgClassName = `${bgClassName} c-absolute c-pb-0 w-100 h-50 c-z--1`;

  return (
    <div className={`w-100 h-100 c-relative ${className}`}>
      {children}
      <div className={`${_bgClassName}`} />
    </div>
  )
};

export default HalfBG;
