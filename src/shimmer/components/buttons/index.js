import React from 'react';

import './index.css';

import ShimmerComponent from '../../../shimmer';

const ButtonsShimmer = () => (
  <div className='ButtonsShimmer'>
    <ShimmerComponent
      width={100}
      height={16}
      backgroundColor={'#B6B0F2'}
      overColor={'#6962AE'}
      borderRadius={3}
    />
    <div className='ButtonsShimmer-space'/>
    <ShimmerComponent
      height={50}
      backgroundColor={'#e9eaeb'}
      overColor={'#c8c9ca'}
      borderRadius={3}
    />
  </div>
);

export default ButtonsShimmer;

