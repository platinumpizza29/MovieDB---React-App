import React from "react";
import "./MovieBox.css";

import { Card } from "antd";

const { Meta } = Card;

export default function MovieBox({
  title,
  poster_path,
  vote_average,
  release_date,
  overview,
}) {
  const imageUrl = "https://image.tmdb.org/t/p/w500/";

  return (
    <div className="MovieBox">
      <Card cover={<img src={imageUrl + poster_path}></img>} id="movieCard">
        <Meta title={title} />
      </Card>
    </div>
  );
}
