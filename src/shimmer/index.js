import React from 'react';

import './index.css';

const Shimmer = props => (
  <div
    className='Shimmer'
    style={{
      width: props.width ? props.width : '100%',
      height: props.height,
      background: props.backgroundColor,
      backgroundImage: `linear-gradient(to right, ${props.backgroundColor} 0%, ${props.overColor} 20%, ${props.backgroundColor} 40%, ${props.backgroundColor} 100%)`,
      backgroundRepeat: 'no-repeat',
      borderRadius: props.borderRadius,
      marginTop: props.marginTop
    }}
  />
);

export default Shimmer;
