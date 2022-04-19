import React from "react";
import { Link } from "react-router-dom";
import PostType from "../../../types/postType";
import Image from "../../image/Image";
import "./PostCard.scss";

type PropsType = {
  data: PostType;
};

const showImage = false;
const PostCard: React.FC<PropsType> = ({ data }) => {
  if (data.author === 8) {
    return null;
  }

  return (
    <div className="post-card-container">
      <Image src={data.image} />

      <Link to={`/posts/${data.id}`}>
        <div className="title">{data.title}</div>
      </Link>

      <div className="date">{data.date}</div>
    </div>
  );
};

export default PostCard;
