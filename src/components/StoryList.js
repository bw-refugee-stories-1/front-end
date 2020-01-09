import React, { useEffect, useState } from 'react';
// import axios from "axios";
import StoryCard from './StoryCard';
import { connect } from 'react-redux';
import { getStories } from '../actions';

function StoryList(props) {
  useEffect(() => {
    props.getStories();
  }, []);

  console.log('Stories in StoryList: ', props.storyState.stories);

  return (
    <div className="storyList">
      <div className="entry">
        {props.storyState.stories.map(story => {
<<<<<<< HEAD
          return  <StoryCard key={story.id} story={story} />;
=======
          return <StoryCard {...props} key={story.id} story={story} />;
>>>>>>> c7dbb64320e5a9fc3e03f57ef42fd3eda44545da
        })}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    storyState: state.storyState,
  };
};

export default connect(mapStateToProps, { getStories })(StoryList);
