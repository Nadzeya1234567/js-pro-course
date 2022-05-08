import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostsGrade } from "../../enums/PostGrade";
import PostType from "../../types/postType";
import { fetchPosts } from "./postsThunks";

const getGradesFromStorage = (): GradesType => {
  try {
    return JSON.parse(localStorage.getItem("grades") || "") as GradesType;
  } catch {
    return {};
  }
};

const setGradesToStorage = (data: GradesType) => {
  try {
    localStorage.setItem("grades", JSON.stringify(data));
  } catch {}
};

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
  count: number;
  loading: boolean;
  error?: string;
};

const initialState: StoreType = {
  data: [],
  count: 0,
  grades: getGradesFromStorage(),
  loading: false,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    likePost: (state, action: PayloadAction<number>) => {
      if (state.grades[action.payload] === PostsGrade.like) {
        delete state.grades[action.payload];
      } else {
        state.grades[action.payload] = PostsGrade.like;
      }

      setGradesToStorage(state.grades);
    },
    dislikePost: (state, action: PayloadAction<number>) => {
      if (state.grades[action.payload] === PostsGrade.dislike) {
        delete state.grades[action.payload];
      } else {
        state.grades[action.payload] = PostsGrade.dislike;
      }

      setGradesToStorage(state.grades);
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
  },
});

export const postsReducer = postsSlice.reducer;
export const postsActions = {
  ...postsSlice.actions,
  fetchPosts,
};
