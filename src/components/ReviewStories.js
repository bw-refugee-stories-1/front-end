import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStories, addStory } from '../actions';
import ReviewStoryCard from './ReviewStoryCard';

const ReviewStories = props => {

  // const dummyStory = {
  //   title: 'Coming to Canada',
  //   email: 'dan@mail.com',
  //   author: 'Alf',
  //   img_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Wyclefjean2_%28300dpi%29.jpg/800px-Wyclefjean2_%28300dpi%29.jpg",
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae efficitur erat, dictum laoreet turpis. Sed fringilla pharetra egestas. Ut ac blandit odio, nec malesuada est. Vestibulum finibus ipsum mauris, sit amet placerat nisl blandit vel. Phasellus tristique pulvinar ultrices. Suspendisse tincidunt sit amet odio eget commodo. Nunc commodo magna.',
  // }

  
  useEffect( () => {
    // props.addStory(dummyStory);
    props.getStories();
  }, []); //TODO Add props.storyState.stories in dependency array.

  const pendingStories = props.storyState.stories.filter( story => {
    return story.approved === 'false';
  })
  
  return (
    <div className='review-stories-list'>
      {pendingStories.map( story => 
        <ReviewStoryCard key={story.id} story={story}/>  
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
  {
    getStories,
    addStory
  }
  )(ReviewStories);