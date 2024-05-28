import React, { useEffect, useState } from 'react';
import './App.css'
import api from './api';
import MovieRow from './components/MovieRow/MovieRow';

const App = () => {

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const loadMovies = async () => {
      let list = await api.getHomeMovies();
      setMovieList(list);
    }
    loadMovies();
  }, []);

  return (
    <div className="page">

      <section>
        {movieList.map((item, key)=>(
          <MovieRow key={key} title={item.title} movies={item.movies}/>
        ))}
      </section>

    </div>
  )
}

export default App;