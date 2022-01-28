import React from 'react';
import { useParams } from 'react-router-dom';
import {Data} from '../data'

function CommentCard() {
    const {movieId,commentId}=useParams()
    const myComment=Data.find(el=>el.id==movieId).comments.find(el=>el.id==commentId)
  return (
        <div>
            <h1> {myComment.text} </h1>
        </div>
        );
}

export default CommentCard;
