import React from "react";
import { MenuItem, Pagination, Select, SelectChangeEvent } from "@mui/material";
import PostsFilterType, { PostsOrder } from "./PostsFilterTypes";
import TextField from "../ui/textField/TextField";
import {
  setLimit,
  setPage,
  setOrder,
  setAuthor,
  setLesson,
} from "./PostsFilterActionCreators";

import "./Posts.scss";

type PropsType = {
  count: number;
  state: PostsFilterType;
  dispatch: any;
};

const PostsFilter: React.FC<PropsType> = ({ count, state, dispatch }) => {
  const updateAuthor = (value: string) => {
    dispatch(setAuthor(value));
  };
  const updateLesson = (value: string) => {
    dispatch(setLesson(value));
  };

  const handleChangeOrdering = (event: SelectChangeEvent) => {
    dispatch(setOrder(event.target.value as PostsOrder));
  };

  const handleChangeLimit = (event: SelectChangeEvent) => {
    dispatch(setLimit(+event.target.value));
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    dispatch(setPage(value));
    //setFilter((prevValue) => ({
    //  ...prevValue,
    //  page: value,
    //}));
  };

  return (
    <div className="posts-filter">
      <TextField
        label="Author"
        value={state.author?.toString()}
        setValue={updateAuthor}
      />
      <TextField
        label="Lesson"
        value={state.lesson_num?.toString()}
        setValue={updateLesson}
      />

      <Select value={state.ordering} onChange={handleChangeOrdering}>
        <MenuItem value={PostsOrder.idAsc}>ASC Id</MenuItem>
        <MenuItem value={PostsOrder.idDesc}>DESC Id</MenuItem>
        <MenuItem value={PostsOrder.dateAsc}>ASC Date</MenuItem>
        <MenuItem value={PostsOrder.dateDesc}>DESC Date</MenuItem>
        <MenuItem value={PostsOrder.titleAsc}>ASC Title</MenuItem>
        <MenuItem value={PostsOrder.titleDesc}>DESC Title</MenuItem>
      </Select>

      <Select
        label="Items per page"
        value={state.limit.toString()}
        onChange={handleChangeLimit}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>

      <Pagination
        className="pagination"
        page={state.page}
        onChange={handleChangePage}
        count={Math.ceil(count / state.limit)}
      />
    </div>
  );
};

export default PostsFilter;
