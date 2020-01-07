import React from 'react';
import {Card, CardBody, CardImg} from "reactstrap";


//start of stories component displaying cards
const StoryCard = props => {

 return(
  <div>
   <Card>
  <CardImg alt="Card image cap"/>
  <CardBody>
   <button type="button">Read More</button>
  </CardBody>
  </Card>
 
  </div>
 );
};

export default StoryCard;