import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostsGrade } from "../../enums/PostGrade";
import Storage from "../../helpers/Storage";
import PostType from "../../types/postType";
import { fetchAllPosts, fetchMyPosts, fetchPosts } from "./postsThunks";

type GradesType = {
  [prop: number]: PostsGrade;
};
//grades = {
//  [1]: +1, - поста с id 1 лайкнут
//  [2]: -1, - поста с id 2 дизлайкнут
//}

type StoreType = {
  data: PostType[];
  grades: GradesType;
  bookmarks: number[];
  count: number;
  loading: boolean;
  error?: string;
};

const initialState: StoreType = {
  data: [],
  count: 0,
  grades: Storage.get("grades", {}),
  bookmarks: Storage.get("bookmarks", []),
  loading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    likePost: (state, { payload: postId }: PayloadAction<number>) => {
      if (state.grades[postId] === PostsGrade.like) {
        delete state.grades[postId];
      } else {
        state.grades[postId] = PostsGrade.like;
      }

      Storage.set("grades", state.grades);
    },
    dislikePost: (state, { payload: postId }: PayloadAction<number>) => {
      if (state.grades[postId] === PostsGrade.dislike) {
        delete state.grades[postId];
      } else {
        state.grades[postId] = PostsGrade.dislike;
      }

      Storage.set("grades", state.grades);
    },
    bookmarkPost: (state, { payload: postId }: PayloadAction<number>) => {
      if (state.bookmarks.includes(postId)) {
        state.bookmarks = state.bookmarks.filter((id) => id !== postId);
      } else {
        state.bookmarks.push(postId);
      }
      Storage.set("bookmarks", state.bookmarks);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.pending, (state) => {
      state.loading = true;
      state.error = undefined;
      state.data = [];
    });
    builder.addCase(fetchPosts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(fetchPosts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;
      state.count = payload.count;
    });

    builder.addCase(fetchAllPosts.pending, (state) => {
      state.loading = true;
      state.error = undefined;
      state.data = [];
    });
    builder.addCase(fetchAllPosts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    });
    builder.addCase(fetchAllPosts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload.data;
      state.count = payload.count;
    });

    builder.addCase(fetchMyPosts.pending, (state) => {
      state.loading = true;
      state.error = undefined;
      state.data = [];
    });
    builder.addCase(fetchMyPosts.rejected, (state, { payload }) => {
      state.loading = false;
      state.error = "Error";
    });
    builder.addCase(fetchMyPosts.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.data = payload;
    });
  },
});

export const postsReducer = postsSlice.reducer;
export const postsActions = {
  ...postsSlice.actions,
  fetchPosts,
  fetchAllPosts,
  fetchMyPosts,
};
