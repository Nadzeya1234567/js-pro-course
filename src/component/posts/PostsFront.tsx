import React, { useEffect, useReducer, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "../hooks/useSelector";
import PostCard from "./postCard/PostCard";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import PostType from "../../types/postType";
import { PostsGrade } from "../../enums/PostGrade";

enum Mode {
  LIKED,
  DISLIKED,
  BOOKMARKED,
}

const PostsFront: React.FC = () => {
  const [mode, setMode] = useState(Mode.LIKED);

  const { fetchAllPosts } = useActions();
  const data = useSelector((state) => state.posts.data);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);

  const grades = useSelector((state) => state.posts.grades);

  const bookmarks = useSelector((state) => state.posts.bookmarks);

  const filteredData = data.filter((item) => {
    if (mode === Mode.LIKED) {
      return grades[item.id] === PostsGrade.like;
    } else if (mode === Mode.DISLIKED) {
      return grades[item.id] === PostsGrade.dislike;
    } else if (mode === Mode.BOOKMARKED) {
      return bookmarks.includes(item.id);
    }
    return false;
  });

  useEffect(() => {
    fetchAllPosts();
  }, []);

  const handleToggleMode = (
    _: React.MouseEvent<HTMLElement>,
    newMode: Mode
  ) => {
    setMode(newMode);
  };

  return (
    <div className="posts-container">
      <ToggleButtonGroup value={mode} exclusive onChange={handleToggleMode}>
        <ToggleButton value={Mode.LIKED}>Liked</ToggleButton>
        <ToggleButton value={Mode.DISLIKED}>Disliked</ToggleButton>
        <ToggleButton value={Mode.BOOKMARKED}>Bookmarked</ToggleButton>
      </ToggleButtonGroup>
      <div className="cards">
        {filteredData.map((item) => (
          <PostCard key={item.id} data={item} />
        ))}
      </div>
      {loading && "Loading..."}
      {error}
    </div>
  );
};

export default PostsFront;
