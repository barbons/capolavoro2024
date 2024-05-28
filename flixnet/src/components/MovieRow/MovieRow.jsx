import React, { useState } from 'react';
import './MovieRow.css';
import NavigateBefore from './navigate_before.svg';
import NavigateNext from './navigate_next.svg';

const MovieRow = ({title, movies}) => {
  const [scrollX, setScrollX] = useState(-400);

  const handleLeftArrow = () => {
    let x = scrollX + Math.round(window.innerWidth / 2);
    if(x > 0) {
      x = 0;
    }
    setScrollX(x);
  }

  const handleRightArrow = () => {
    let x = scrollX - Math.round(window.innerWidth / 2);
    let listW = movies.results.length * 150;
    if((window.innerWidth - listW) > x) {
      x = window.innerWidth - listW - 60;
    }
    setScrollX(x);
  }

  return (
    <div>
        <h2>{title}</h2>
        <div className="area">
          <div className="left" onClick={handleLeftArrow}>
            <img src={NavigateBefore} style={{FontSize: 50} } alt='before'/>
          </div>
          <div className="right" onClick={handleRightArrow}>
            <img src={NavigateNext} style={{FontSize: 50}} alt='next'/>
          </div>
          <div className="list" style={{
            marginLeft: scrollX,
            width: movies.results.length * 150
            }}>
            {movies.results.length > 0 && movies.results.map((item, key)=>(
              <div key={key} className="movie">
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title} />
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default MovieRow