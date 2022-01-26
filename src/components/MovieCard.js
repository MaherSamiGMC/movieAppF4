import React from 'react';
import {Card,Button} from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'

function MovieCard( {title,rate,description,image} ) {
  return (
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={image} />
    <Card.Body>
      <Card.Title> {title} </Card.Title>
      <Card.Text>
      <Rating initialValue={rate} readonly={true} />
      </Card.Text>
      <Card.Text>
        {description}
      </Card.Text>
      <Button variant="primary">See Details</Button>
    </Card.Body>
  </Card>
  );
}

export default MovieCard;
