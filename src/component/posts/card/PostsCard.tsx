import React, { useState } from "react";
import PostType from "../../../types/postType";
import "./PostsCard.scss";

type PropsType = {
  data: PostType;
};

const showImage = false;
const PostsCard: React.FC<PropsType> = ({ data }) => {
  const [error, setError] = useState(false);

  if (data.author === 8) {
    return null;
  }

  const onError = () => {
    setError(true);
  };

  return (
    <div className="post-card-container">
      {!!data.image && !error ? (
        <div className="image-wrap">
          <img src={data.image} onError={onError} alt="" className="image" />
        </div>
      ) : (
        <div className="image-placeholder">
          <div /> <div />
        </div>
      )}
      {/*  {data.image && <img src={data.image} alt="" className="image" />} */}

      <div className="title">{data.title}</div>
      <div className="text">{data.text}</div>
      <div className="date">{data.date}</div>
    </div>
  );
};

export default PostsCard;
