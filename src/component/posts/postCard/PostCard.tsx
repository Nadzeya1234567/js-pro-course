import React from "react";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import PostType from "../../../types/postType";
import Image from "../../image/Image";
import "./PostCard.scss";
import { ReactComponent as LikeIcon } from "../../../assets/like.svg";
import { ReactComponent as DislikeIcon } from "../../../assets/dislike.svg";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import { PostsGrade } from "../../../enums/PostGrade";

type PropsType = {
  data: PostType;
};

const showImage = false;
const PostCard: React.FC<PropsType> = ({ data }) => {
  const { likePost, dislikePost } = useActions();
  const grades = useSelector((state) => state.posts.grades);
  const isLiked = grades[data.id] === PostsGrade.like;
  const isDisliked = grades[data.id] === PostsGrade.dislike;

  const handleClickLike = () => {
    likePost(data.id);
  };

  const handleClickDislike = () => {
    dislikePost(data.id);
  };

  return (
    <div className="post-card-container">
      <Image src={data.image} />

      <Link to={`/posts/${data.id}`}>
        <div className="title">{data.title}</div>
      </Link>

      <div className="actions-line">
        <div className="date">{data.date}</div>

        <IconButton onClick={handleClickLike}>
          <LikeIcon className={`icon ${isLiked ? "_liked" : ""}`} />
        </IconButton>
        <IconButton onClick={handleClickDislike}>
          <DislikeIcon className={`icon ${isDisliked ? "_disliked" : ""}`} />
        </IconButton>
      </div>
    </div>
  );
};

export default PostCard;
