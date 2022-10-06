import React, {useEffect, useState} from 'react'
import './App.css';
import searchIcon from './seach.svg';
import MovieCard from './MovieCard';

const apikey = '3399fc3f';
const url = `http://www.omdbapi.com/?apikey=${apikey}`
// const movie1 = {
//   "Title": "Italian Spiderman",
//   "Year": "2007",
//   "imdbID": "tt2705436",
//   "Type": "movie",
//   "Poster": "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg"
// }

const App = () => {  
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title)=>{
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  }

  useEffect(()=>{
    searchMovies('wanted')
  }, []);
  
  return (
  <div className='app'>
    <h1>MovieLand</h1>
    <div className='search'>
      <input 
      placeholder='Search for movies'
      value='spiderman'
      onChange={()=>{}}

      />
      <img src={searchIcon}
        alt='search'
        onClick={()=>{}}
       />
    </div>
    { movies?.length >0 ? (
      <div className='container'>
        {movies.map((movie)=>{
          <MovieCard movie={movie} />
        })}
      </div>
    ) : (<div className='empty'>
      <h2> No movies found</h2>
    </div>
    )}





  </div>
)}

export default App;