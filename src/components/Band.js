import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';



const Band = ({ className = '', gridClassName = '', size = '5', row = true, col = 12, children = null, sm = 12, md }) => {
  const _row = row ? (
      <Row className='justify-content-center'>
        <Col sm={sm} md={md || sm}>
          {children}
        </Col>
      </Row> 
    ): children;

  return (
    <div className={`w-100 py-${size} ${className}`}>
      <Grid className={`my-${size} py-${size} ${gridClassName}`}>
        {_row}
      </Grid>
    </div>
  )
};

export default Band;
