import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStories, addStory } from '../actions';
import ReviewStoryCard from './ReviewStoryCard';

const ReviewStories = props => {

  
  useEffect( () => {
    props.getStories();
  }, []);

  const pendingStories = props.storyState.stories.filter( story => {
    return story.approved === 'false';
  })
  
  return (
    <div className="container">
      <div className='review-stories-list'>
        {pendingStories.map( story => 
          <ReviewStoryCard key={story.id} story={story}/>  
        )}
      </div>
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
  {
    getStories,
    addStory
  }
  )(ReviewStories);