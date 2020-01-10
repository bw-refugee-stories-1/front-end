import React from 'react';

import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import { Button } from 'reactstrap';

const StoryCard = props => {
  //random number generator between 0 and 4
  const rand = Math.floor(Math.random() * 5);
  console.log('image', props.story.id.img_url);
  const imgArr = [
    'https://unsplash.com/photos/9XT1_6wFTpY',
    'https://unsplash.com/photos/9XT1_6wFTpY',
    'https://unsplash.com/photos/9XT1_6wFTpY',
    'https://unsplash.com/photos/9XT1_6wFTpY',
    'https://unsplash.com/photos/9XT1_6wFTpY',
  ];
  // TODO: check for the null value when getting images to see if the value actually is "null"
  const imgSrc =
    props.story.img_url !== null ? props.story.img_url : imgArr[rand];

  return (
    <div className="mt-4">
      {/* <img 
        src="" 10-4
        alt="Image from a refugee story"
      /> */}
      <Card className="mt-4">
        <CardImg top width="100%" src={imgSrc} alt="Card image cap" />
        <CardBody >
          <CardText className="story-text">
            {props.story.text
              .split('.')[0]
              .split(' ')
              .slice(0, 20)
              .join(' ') + '...'}
          </CardText>
          <Button
            color="success"
            onClick={() =>
              props.history.push(`/stories/${props.story.id}`)
            }
          >
            Read More
          </Button>{' '}
        </CardBody>
      </Card>
    </div>
  );
};

export default StoryCard;
