import React from 'react';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';

const StoryCard = props => {
  //random number generator between 0 and 4
  const rand = Math.floor(Math.random() * 5);

  const imgArr = [
    '../images/refugeePicture1.jpg',
    '../images/refugeePicture2.jpg',
    '../images/refugeePicture3.jpg',
    '../images/refugeePicture4.jpg',
    '../images/refugeePicture5.jpg',
  ];
  // TODO: check for the null value when getting images to see if the value actually is "null"
  const imgSrc =
    props.story.img_url !== null ? props.story.img_url : imgArr[rand];
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1578482446235-326e95f962a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
      <Card>
        <CardImg
          top
          width="100%"
          src={imgArr[0]}
          alt="Card image cap"
        />
        <CardBody>
          <CardText>
            {props.story.text
              .split('.')[0]
              .split(' ')
              .slice(0, 10)
              .join(' ') + '...'}
          </CardText>
          <Button>Read More</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default StoryCard;
