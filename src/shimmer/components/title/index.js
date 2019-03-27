import React from 'react';

import './index.css';

import ShimmerComponent from '../../../shimmer';

const TitleShimmer = () => (
  <div className='TitleShimmer'>
    <ShimmerComponent
      width={220}
      height={24}
      backgroundColor={'#B6B0F2'}
      overColor={'#6962AE'}
      borderRadius={3}
    />
  </div>
);

export default TitleShimmer;

