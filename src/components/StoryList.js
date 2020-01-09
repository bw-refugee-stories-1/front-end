import React, { useEffect, useState } from 'react';
// import axios from "axios";
import StoryCard from './StoryCard';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { getStories } from '../actions';

function StoryList(props) {
  useEffect(() => {
    props.getStories();
  }, []);

  console.log('Stories in StoryList: ', props.storyState.stories);

  return (
    <div className="storyList">
      <Button>Read More: </Button>
      <div className="entry">
        {props.storyState.stories.map(story => {
          return <StoryCard key={story.id} story={story} />;
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
//for the merge
export default connect(mapStateToProps, { getStories })(StoryList);