import React from 'react';

import './index.css';

import ShimmerComponent from '../../shimmer';

const CheckboxShimmer = () => (
  <div className='CheckboxShimmer'>
    <ShimmerComponent
      width={26}
      height={26}
      backgroundColor={'#e9eaeb'}
      overColor={'#c8c9ca'}
    />
    <div className='CheckboxShimmer-text'>
      <ShimmerComponent
        width={'90%'}
        height={8}
        backgroundColor={'#B6B2B2'}
        overColor={'#656565'}
        borderRadius={3}
      />
      <ShimmerComponent
        height={8}
        backgroundColor={'#B6B2B2'}
        overColor={'#656565'}
        borderRadius={3}
        marginTop={12}
      />
      <ShimmerComponent
        width={'70%'}
        height={8}
        backgroundColor={'#B6B2B2'}
        overColor={'#656565'}
        borderRadius={3}
        marginTop={12}
      />
    </div>
  </div>
);

export default CheckboxShimmer;

