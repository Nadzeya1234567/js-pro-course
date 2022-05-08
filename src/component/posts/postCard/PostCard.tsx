import React from "react";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import PostType from "../../../types/postType";
import Image from "../../image/Image";
import "./PostCard.scss";
import { ReactComponent as LikeIcon } from "../../../assets/like.svg";
import { ReactComponent as DislikeIcon } from "../../../assets/dislike.svg";
import { ReactComponent as BookmarkIcon } from "../../../assets/bookmark.svg";
import { useActions } from "../../hooks/useActions";
import { useSelector } from "../../hooks/useSelector";
import { PostsGrade } from "../../../enums/PostGrade";

type PropsType = {
  data: PostType;
};

const showImage = false;
const PostCard: React.FC<PropsType> = ({ data }) => {
  const { likePost, dislikePost, bookmarkPost } = useActions();
  const grades = useSelector((state) => state.posts.grades);
  const isLiked = grades[data.id] === PostsGrade.like;
  const isDisliked = grades[data.id] === PostsGrade.dislike;

  const bookmarks = useSelector((state) => state.posts.bookmarks);
  const isBookmarked = bookmarks.includes(data.id);

  const handleClickLike = () => likePost(data.id);
  const handleClickDislike = () => dislikePost(data.id);
  const handleClickBookmark = () => bookmarkPost(data.id);

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
        <IconButton onClick={handleClickBookmark}>
          <BookmarkIcon
            className={`icon ${isBookmarked ? "_bookmarked" : ""}`}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default PostCard;
