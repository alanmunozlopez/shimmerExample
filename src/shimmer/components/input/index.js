import React from 'react';

import './index.css';

import ShimmerComponent from '../../../shimmer';

const InputShimmer = () => (
  <div className='InputShimmer'>
    <ShimmerComponent
      width={120}
      height={15}
      backgroundColor={'#B6B2B2'}
      overColor={'#656565'}
      borderRadius={3}
    />
    <ShimmerComponent
      height={45}
      backgroundColor={'#e9eaeb'}
      overColor={'#c8c9ca'}
      borderRadius={4}
      marginTop={14}
    />
  </div>
);

export default InputShimmer;

