import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {Data} from '../data'
import { useNavigate } from "react-router-dom";

function MovieDetails() {
    const {movieId}=useParams()
    const [first, setfirst] = useState('');
    let navigate = useNavigate();
    const myMovie=Data.find(el=>el.id==movieId)
  return (
  <div>
      <input type="text" onChange={(e)=>setfirst(e.target.value)} />
      <button onClick={()=>first==='hello' && navigate('/addnewmovie') } > go back to home page   </button>
      <h1> movie title : {myMovie.title} </h1>
      <p> movie description : {myMovie.description}  </p>
      <div style={{display:"flex",justifyContent:"center"}} >
      <iframe width={800} height={400} src={myMovie.trailer} >

      </iframe>
      </div>

  </div>);
}

export default MovieDetails;
