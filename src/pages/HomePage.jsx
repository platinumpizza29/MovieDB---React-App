import React, { useState, useEffect } from "react";
import "./HomePage.css";

import { Card, Rate, Input } from "antd";

const { Meta } = Card;
const { Search } = Input;

// var data = [];

// const getMovies = async () => {
//   var response = await axios.get(
//     `https://api.themoviedb.org/3/movie/popular?api_key=355fd0f2944d9dabe0e776b8b2e527db&language=en-US&page=1`
//   );
//   data = response.data["results"];
//   console.log(data);
// };

export default function HomePage() {
  const [getMovies, setMovies] = useState([]);
  const imageUrl = "https://image.tmdb.org/t/p/w500/";

  useEffect(() => {
    // getMovies();
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=355fd0f2944d9dabe0e776b8b2e527db&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return (
    <div className="HomePage">
      <div className="content">
        <h1 id="heading">Movie DB </h1>
        <div className="search">
          <Search
            placeholder="input search text"
            enterButton
            width={20}
            id="search"
          />
        </div>
      </div>
      <div className="movieContent">
        {getMovies.map((movie) => (
          <Card
            hoverable
            id="movieContent"
            key={movie.id}
            style={{ width: 300 }}
            cover={<img alt="example" src={imageUrl + movie.poster_path} />}
            actions={[<Rate disabled defaultValue={movie.vote_average} />]}
          >
            <Meta title={movie.title} />
          </Card>
        ))}
      </div>
    </div>
  );
}
