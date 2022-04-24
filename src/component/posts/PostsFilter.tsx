import React from "react";
import { MenuItem, Pagination, Select, SelectChangeEvent } from "@mui/material";
import PostsFilterType, { PostsOrder } from "./PostsFilterType";
import TextField from "../ui/textField/TextField";

import "./Posts.scss";

type PropsType = {
  count: number;
  filter: PostsFilterType;
  setFilter: (callback: (v: PostsFilterType) => PostsFilterType) => void;
};

const PostsFilter: React.FC<PropsType> = ({ count, filter, setFilter }) => {
  const setAuthor = (value: string) => {
    //валидация: если строка не явл числом, код НЕ выполняется.
    if (isNaN(+value)) {
      return;
    }
    //чтобы в строке не висел 0
    const author = +value > 0 ? +value : undefined;
    setFilter((prevValue) => ({
      ...prevValue,
      author,
    }));
  };
  const setLesson = (value: string) => {
    if (isNaN(+value)) {
      return;
    }
    const lesson_num = +value > 0 ? +value : undefined;
    setFilter((prevValue) => ({
      ...prevValue,
      lesson_num,
    }));
  };

  const handleChangeOrdering = (event: SelectChangeEvent) => {
    setFilter((prevValue) => ({
      ...prevValue,
      ordering: event.target.value as PostsOrder,
    }));
  };

  const handleChangeLimit = (event: SelectChangeEvent) => {
    setFilter((prevValue) => ({
      ...prevValue,
      page: 1,
      limit: +event.target.value,
    }));
  };

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setFilter((prevValue) => ({
      ...prevValue,
      page: value,
    }));
  };

  return (
    <div className="posts-filter">
      <TextField
        label="Author"
        value={filter.author?.toString()}
        setValue={setAuthor}
      />
      <TextField
        label="Lesson"
        value={filter.lesson_num?.toString()}
        setValue={setLesson}
      />

      <Select
        label="Items per page"
        value={filter.ordering}
        onChange={handleChangeOrdering}
      >
        <MenuItem value={PostsOrder.idAsc}>ASC Id</MenuItem>
        <MenuItem value={PostsOrder.idDesc}>DESC Id</MenuItem>
        <MenuItem value={PostsOrder.dateAsc}>ASC Date</MenuItem>
        <MenuItem value={PostsOrder.dateDesc}>DESC Date</MenuItem>
        <MenuItem value={PostsOrder.titleAsc}>ASC Title</MenuItem>
        <MenuItem value={PostsOrder.titleDesc}>DESC Title</MenuItem>
      </Select>

      <Select
        label="Items per page"
        value={filter.limit.toString()}
        onChange={handleChangeLimit}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>

      <Pagination
        className="pagination"
        page={filter.page}
        onChange={handleChangePage}
        count={Math.ceil(count / filter.limit)}
      />
    </div>
  );
};

export default PostsFilter;
