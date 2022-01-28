import React from 'react';
import {Card,Button} from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'
import { LinkContainer } from 'react-router-bootstrap'

function MovieCard( {id,title,rate,description,image} ) {
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
      <LinkContainer to={`/movie/${id}`}>
        <Button variant="primary">See Details</Button>
      </LinkContainer>


    </Card.Body>
  </Card>
  );
}

export default MovieCard;
