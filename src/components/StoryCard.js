import React from 'react';

import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import { Button } from 'reactstrap';

const StoryCard = props => {
  return (
    <Card className="mt-4">
      <CardImg
        top
        width="100%"
        src={props.story.img_url}
        alt="Card image cap"
      />
      <CardBody>
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
  );
};

export default StoryCard;
