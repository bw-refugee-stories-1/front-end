import React from 'react';
import Carousel from './Carousel';
import StoryList from './StoryList';

const HomePage = props => {
  return (
    <div className="container vertical">
      <Carousel />
      <div className="home-page">
        <h2>Read Our Stories</h2>
        <StoryList {...props} />
      </div>
    </div>
  );
};

export default HomePage;
