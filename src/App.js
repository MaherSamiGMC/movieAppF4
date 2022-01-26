import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import AddNewMovie from './components/AddNewMovie';
import Header from './components/Header';
import ListOfMovies from './components/ListOfMovies';
import { Data } from './data';

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
      <AddNewMovie addNewMovie={addNewMovie} />
      <ListOfMovies movies={Movies} />
    </div>
  );
}

export default App;
