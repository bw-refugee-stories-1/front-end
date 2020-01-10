import React from 'react';

import { Card, CardImg, CardText, CardBody } from 'reactstrap';
import { Button } from 'reactstrap';

const StoryCard = props => {
  //random number generator between 0 and 4
  // const rand = Math.floor(Math.random() * 5);
  // console.log('image', props.story.id.img_url);
  // const imgArr = [
  //   'https://images.unsplash.com/photo-1554428122-c2ca1f2cb88c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80',
  //   'https://images.unsplash.com/photo-1529441435232-e28880548c25?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  //   'https://images.unsplash.com/photo-1551556729-c8dee4337009?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  //   'https://images.unsplash.com/photo-1526817575615-3685e135615d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1288&q=80',
  //   'https://images.unsplash.com/photo-1559173525-71a8abaaba32?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80',
  // ];
  // // TODO: check for the null value when getting images to see if the value actually is "null"

  // const imgSrc =
  //   props.story.img_url === null || props.story.img_url === ''
  //     ? imgArr[rand]
  //     : props.story.img_url;

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
