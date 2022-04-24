export enum PostsOrder {
  idAsc = "id",
  idDesc = "-id",
  dateAsc = "date",
  dateDesc = "-date",
  titleAsc = "title",
  titleDesc = "-title",
}

type PostsFilterType = {
  limit: number;
  page: number;
  author?: number;
  lesson_num?: number;
  ordering: PostsOrder;
};

export default PostsFilterType;
