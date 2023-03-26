import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./MovieBox.css";

export default function MovieBox() {
  let { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState([]);

  const imageUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=355fd0f2944d9dabe0e776b8b2e527db`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovie(data);
      });
  }, []);

  return (
    <div className="MovieBox">
      <div className="movieImage">
        <img src={imageUrl + movie.poster_path} id="movieImg" />
      </div>
      <div className="movieInfo">
        <h1 id="title">{movie.title}</h1>
        <div className="description">
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
