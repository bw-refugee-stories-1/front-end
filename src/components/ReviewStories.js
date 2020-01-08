import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getStories, getStoryById } from '../actions';

const ReviewStories = props => {

  useEffect( () => {
    props.getStories();
    props.getStoryById(4);
  }, []);

  const pendingStories = props.storyState.stories.filter( story => {
    return story.approved === 'false';
  })
  
  return (
    <div className='review-stories-list'>
      {pendingStories.map( story => 
        <p>{story.title}</p>  
      )}
      <p>Story by ID: {props.storyState.storyById.title}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    storyState: state.storyState
  }
}
export default connect(
  mapStateToProps,
  {getStories, getStoryById}
  )(ReviewStories);