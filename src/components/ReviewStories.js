import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getStories, getStoryById, addStory } from '../actions';

const ReviewStories = props => {

  const dummyStory =  {
    title: 'Arriving in Argentina',
    email: 'dan@mail.com',
    author: 'Jesse James',
    text: 'Lorem ipsum dolor sit amet. Consectetur adipiscing elit. Fusce vitae efficitur erat, dictum laoreet turpis. Sed fringilla pharetra egestas. Ut ac blandit odio, nec malesuada est. Vestibulum finibus ipsum mauris, sit amet placerat nisl blandit vel. Phasellus tristique pulvinar ultrices. Suspendisse tincidunt sit amet odio eget commodo. Nunc commodo magna.',
  };

  useEffect( () => {
    props.getStories();
    // props.getStoryById(4);
  }, []);

  const pendingStories = props.storyState.stories.filter( story => {
    return story.approved === 'false' || story.approved === null;
  })
  
  return (
    <div className='review-stories-list'>
      {pendingStories.map( story => 
        <p key={story.id}>{story.title}</p>  
      )}
      <button
        onClick={ () => props.addStory(dummyStory)}
      >
        Submit that there story!
      </button>
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
    getStoryById,
    addStory,
  }
  )(ReviewStories);