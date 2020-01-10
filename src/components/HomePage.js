import React from 'react';
import Caro from './Carousel';
import StoryList from './StoryList';

const HomePage = props => {
  return (
    <div className="homePage">
      <Caro />
      <h2>Read Our Stories</h2>
      <StoryList {...props} />
    </div>
  );
};

export default HomePage;
