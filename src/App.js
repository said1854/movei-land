import React, {useEffect} from 'react'
import Card from './components/Card';
import './App.css';

const apikey = '3399fc3f';
const url = `http://www.omdbapi.com/?apikey=${apikey}`

const App = () => {  
  const searchMovies = async (title)=>{
    const response = await fetch(`${url}&s=${title}`);
    const data = await response.json();
    console.log(data);
  }

  useEffect(()=>{
    searchMovies('spiderman')
  }, []);
  
  return (<>
    <h1>App</h1>
    <Card />
    </>)
}

export default App;