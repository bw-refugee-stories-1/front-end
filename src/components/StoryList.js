import React, { useEffect, useState } from 'react';
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
          return (
            story.approved === 'true' && (
              <StoryCard {...props} key={story.id} story={story} />
            )
          );
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
