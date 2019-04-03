import React from 'react';

import './index.css';

import InputShimmer from './components/input';
import TitleShimmer from './components/title';
import PhoneInputShimmer from './components/phone-input';
import CheckboxShimmer from './components/checkbox';
import ButtonsShimmer from './components/buttons';

const SkeletonLoader = () => (
  <div className='SkeletonLoader'>
    <div className='SkeletonLoader-card'>
      <TitleShimmer />
      <InputShimmer />
      <InputShimmer />
      <InputShimmer />
    </div>
    <div className='SkeletonLoader-card'>
      <TitleShimmer />
      <InputShimmer />
      <InputShimmer />
      <PhoneInputShimmer />
    </div>
    <div className='SkeletonLoader-out-of-card'>
      <CheckboxShimmer />
      <ButtonsShimmer />
    </div>
  </div>
);

export default SkeletonLoader;

