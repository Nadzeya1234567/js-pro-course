import React, { useEffect, useReducer } from "react";
import usePosts from "../../apiHooks/usePosts";
import PostsCard from "./postCard/PostCard";
import PostsFilter from "./PostsFilter";
import { initialState, PostsFilterReducer } from "./PostsFilterReducer";
import { useSelector } from "../hooks/useSelector";

import "./Posts.scss";
import { useActions } from "../hooks/useActions";

type PropsType = {};

const Posts: React.FC<PropsType> = () => {
  const [state, dispatch] = useReducer(PostsFilterReducer, initialState);
  const { fetchPosts } = useActions();

  //const { data, loading, error } = usePosts(state);
  const data = useSelector((state) => state.posts.data);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);
  const count = useSelector((state) => state.posts.count);

  useEffect(() => {
    fetchPosts(state);
  }, [state]);

  return (
    <div className="posts-container">
      <PostsFilter count={count} state={state} dispatch={dispatch} />

      <div className="cards">
        {data.map((item) => (
          <PostsCard key={item.id} data={item} />
        ))}
      </div>

      {loading && "Loading..."}
      {error}
    </div>
  );
};

export default Posts;
