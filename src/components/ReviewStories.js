import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getStories } from '../actions';

const ReviewStories = props => {

  useEffect( () => {
    props.getStories();
  }, []);

  const pendingStories = props.storyState.stories.filter( story => {
    return story.approved === false;
  })
  
  return (
    <div className='review-stories-list'>
      {pendingStories.map( story => 
        <h2>{story.title}</h2>  
      )}
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
  {getStories}
  )(ReviewStories);