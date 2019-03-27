import React from 'react';

import './App.css';

import InputShimmer from './shimmer/components/input';
import TitleShimmer from './shimmer/components/title';
import PhoneInputShimmer from './shimmer/components/phone-input';
import CheckboxShimmer from './shimmer/components/checkbox';
import ButtonsShimmer from './shimmer/components/buttons';

const App = () => (
  <div className='App'>
    <div className='App-card'>
      <TitleShimmer />
      <InputShimmer />
      <InputShimmer />
      <InputShimmer />
    </div>
    <div className='App-card'>
      <TitleShimmer />
      <InputShimmer />
      <InputShimmer />
      <PhoneInputShimmer />
    </div>
    <div className='App-out-of-card'>
      <CheckboxShimmer />
      <ButtonsShimmer />
    </div>
  </div>
);

export default App;

