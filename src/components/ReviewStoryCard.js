import React from 'react';
import { connect } from 'react-redux';
import { approveStory, rejectStory, getStories } from '../actions';

const ReviewStoryCard = props => {
  return (
    <div className='review-story-card'>
      <h3>{props.story.title}</h3>
      <img src={props.story.img_url}/>
      <p className='author-text'>{props.story.author}</p>
      <p>{props.story.text}</p>
      <div className='review-buttons'>
        <button
          className='reject-button'
          onClick={ () => {
            props.rejectStory(props.story.id);
          }}
        >
          Reject
        </button>
        <button 
          onClick={() => {
            const updatedStory = {
              ...props.story,
              approved: 'true',
            }
            props.approveStory(updatedStory)
          }}
        >
          Approve
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    storyState: state.storyState
  }
}
export default connect(
  mapStateToProps,
  {
    approveStory,
    rejectStory,
    getStories,
  }
  )(ReviewStoryCard);