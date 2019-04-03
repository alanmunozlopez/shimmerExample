import React from 'react';

import './index.css';

import ShimmerComponent from '../../shimmer';

const PhoneInputShimmer = () => (
  <div className='PhoneInputShimmer'>
    <div className='PhoneInputShimmer-prefix'>
      <ShimmerComponent
        width={70}
        height={45}
        backgroundColor={'#e9eaeb'}
        overColor={'#c8c9ca'}
        borderRadius={4}
      />
      <ShimmerComponent
        width={70}
        height={8}
        backgroundColor={'#B6B2B2'}
        overColor={'#656565'}
        borderRadius={3}
        marginTop={11}
      />
    </div>
    
    <div className='PhoneInputShimmer-number'>
      <ShimmerComponent
        height={45}
        backgroundColor={'#e9eaeb'}
        overColor={'#c8c9ca'}
        borderRadius={4}
      />
      <ShimmerComponent
        width={70}
        height={8}
        backgroundColor={'#B6B2B2'}
        overColor={'#656565'}
        borderRadius={3}
        marginTop={11}
      />
    </div>

  </div>
);

export default PhoneInputShimmer;

