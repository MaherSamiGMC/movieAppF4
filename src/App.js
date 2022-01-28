import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import AddNewMovie from './components/AddNewMovie';
import Header from './components/Header';
import ListOfMovies from './components/ListOfMovies';
import { Data } from './data';
import {
  Routes,
  Route
} from "react-router-dom";
import MovieDetails from './components/MovieDetails';
import CommentCard from './components/CommentCard';

function App() {
  const [Movies, setMovies] = useState(Data)
  const addNewMovie=(x)=>{
    setMovies([...Movies,x])
  }
  // searching by movie title
  // const filterMovie=(searchText)=>{
  //   setMovies(Movies.filter(el=>el.title.toLowerCase().includes(searchText.toLowerCase())))
  // }

  const filterMovie=(searchText,rating)=>{
     setMovies(Movies.filter(el=> el.rate>=rating && el.title.toLowerCase().includes(searchText.toLowerCase())))
  }
  return (
    <div >
      <Header filterMovie={filterMovie} />
      <Routes>
      <Route path="/" element={ <> <ListOfMovies movies={Movies} /> </>  } />
      <Route path="/addnewmovie" element={ <> <AddNewMovie addNewMovie={addNewMovie} /></>  } />
      <Route path="/contactUs" element={ <>  <div> <h1> contact-us page </h1>  </div> </>  } />
      <Route path="/movie/:movieId/" element={ <MovieDetails/>  } />
      <Route path="/movie/:movieId/:commentId" element={ <CommentCard /> } />
      <Route path="*" element={ <h1> 404 3ammar : (  </h1> } />
      </Routes>

    </div>

  );
}

export default App;
