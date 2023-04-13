import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import CountUp from "react-countup";
import { Col, Statistic, Space, Rate, Row } from "antd";
import "./MovieBox.css";

export default function MovieBox() {
  let { id } = useParams();
  console.log(id);
  const [movie, setMovie] = useState([]);
  const formatter = (value) => <CountUp end={value} separator="," />;

  const imageUrl = "https://image.tmdb.org/t/p/w500/";

  var stars = movie.vote_average / 2;

  console.log(stars);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=355fd0f2944d9dabe0e776b8b2e527db`
    )
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, []);

  return (
    <motion.div
      className="MovieBox"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, translateX: 0, translateY: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <div className="movieImage">
        <img src={imageUrl + movie.poster_path} id="movieImg" />
      </div>
      <div className="movieInfo">
        <h1 id="title">{movie.title}</h1>
        <div className="description">
          <p>{movie.overview}</p>
          <Row gutter={16} id="vote">
            <Col span={12}>
              <Statistic
                title="Vote Count"
                value={movie.vote_count}
                formatter={formatter}
              />
            </Col>
            <Rate disabled allowHalf value={stars} />
          </Row>
        </div>
      </div>
    </motion.div>
  );
}
