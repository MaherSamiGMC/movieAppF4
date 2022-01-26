import React, { useState } from 'react';
import {Form,Button} from 'react-bootstrap'
import { Rating } from 'react-simple-star-rating'


function AddNewMovie({addNewMovie}) {
    const [newMovie, setnewMovie] = useState({});
    console.log(newMovie);
  return (
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label> movie title </Form.Label>
        <Form.Control type="text" placeholder="Enter title" onChange={(e)=>setnewMovie({...newMovie,title:e.target.value})} />
        <Form.Label> movie description</Form.Label>
        <Form.Control type="text" placeholder="Enter description" onChange={(e)=>setnewMovie({...newMovie,description:e.target.value})} />
        <Form.Label> movie rate </Form.Label>
        <Rating onClick={(rate)=> setnewMovie({...newMovie,rate:rate/20})  }  />
        <br/>
        <Form.Label>movie image url</Form.Label>
        <Form.Control type="text" placeholder="Enter image url" onChange={(e)=>setnewMovie({...newMovie,posterUrl:e.target.value})} />
        <Form.Label>movie trailer</Form.Label>
        <Form.Control type="text" placeholder="Enter trailer" onChange={(e)=>setnewMovie({...newMovie,trailer:e.target.value})} />
        </Form.Group>
    
        <Button onClick={()=>addNewMovie({...newMovie,id:Math.random()})} variant="primary">
        Add new movie
        </Button>
    </Form>
  );
}

export default AddNewMovie;
