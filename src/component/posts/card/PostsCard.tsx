import React from "react";
import PostType from "../../../types/postType";
import "./PostsCard.scss";

type PropsType = {
  data: PostType;
};

const showImage = false;
const PostsCard: React.FC<PropsType> = ({ data }) => {
  return (
    <div className="post-card-container">
      {data.image ? (
        <div className="image-wrap">
          <img src={data.image} alt="" className="image" />
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
