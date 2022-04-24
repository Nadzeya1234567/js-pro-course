import PostsFilterType from "../component/posts/PostsFilterType";
import PostType from "../types/postType";
import useRequest from "./useRequest";

const URL = "https://studapi.teachmeskills.by/blog/posts/";

type ResponseType = {
  count: number;
  next?: string;
  previous?: string;
  results: PostType[];
};

const defValue: ResponseType = {
  count: 0,
  results: [],
};
const usePosts = ({
  page,
  limit,
  author,
  lesson_num,
  ordering,
}: PostsFilterType) => {
  const offset = limit * (page - 1);
  let url = `${URL}?limit=${limit}&offset=${offset}&ordering=${ordering}`;

  if (author) {
    url += `&author=${author}`;
  }
  if (lesson_num) {
    url += `&lesson_num=${lesson_num}`;
  }
  const { data, loading, error } = useRequest<ResponseType>(defValue, url);

  return { data, loading, error };
};

export default usePosts;
