import React, { useState, useEffect } from "react";
import "./HomePage.css";
import { motion } from "framer-motion";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { Card, Rate, Input } from "antd";
import MovieBox from "./MovieBox";

const { Meta } = Card;
const { Search } = Input;

export default function HomePage() {
  let navigate = useNavigate();
  const [getMovies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
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
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="movieContent">
        {getMovies
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.title.toLowerCase().includes(search);
          })
          .map((movie, i) => (
            <motion.div
              initial={{ opacity: 0, translateX: -50, translateY: -50 }}
              animate={{ opacity: 1, translateX: 0, translateY: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card
                hoverable
                id="movieContent"
                key={movie.id}
                style={{ width: 300 }}
                cover={<img alt="example" src={imageUrl + movie.poster_path} />}
                actions={[]}
                onClick={() => navigate(`/moviebox/${movie.id}`)}
              >
                <Meta title={movie.title} />
              </Card>
            </motion.div>
          ))}
      </div>
    </div>
  );
}
