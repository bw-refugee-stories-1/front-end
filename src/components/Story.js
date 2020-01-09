import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getStoryById } from '../actions';

const Story = props => {

  useEffect( () => {
    const id = props.match.params.id;
    props.getStoryById(id);
  }, [props.match.params.id])

  const story = props.storyState.storyById;
  if (story.approved === 'false') props.history.push('/')

  return (
    <div className='story-container'>
      <h2>{story.title}</h2>
      <img src={story.img_url}/>
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
  {getStoryById}
)(Story);