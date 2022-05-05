//import { setValue, shiftValue } from "./actionCreators";
import { ClickerActionTypes, ClickerStateType } from "./types";
import { ClickerActionType } from "./types";
import { createReducer } from "@reduxjs/toolkit";

const initialState: ClickerStateType = {
  value: 0,
};

export const clickerReducer = createReducer(initialState, {
  [ClickerActionTypes.SET_VALUE]: (state, action: ClickerActionType) => {
    state.value = action.payload;
  },
  [ClickerActionTypes.SHIFT_VALUE]: (state, action: ClickerActionType) => {
    state.value = state.value + action.payload;
  },
});

//export const _clickerReducer = (
// state = initialState,
// action: ClickerActionType
//): ClickerStateType => {
// switch (action.type) {
//  case setValue.type: {
//    const clone = cloneDeep(state);
//    clone.value = action.payload;
//    return clone;
//return {
// ...state,
//  value: action.payload,
// };
//  }
//ClickerActionTypes.SHIFT_VALUE = shiftValue.type
// case shiftValue.type: {
//   const clone = cloneDeep(state);
//   clone.value = clone.value + action.payload;
//  return clone;

//const value = state.value + action.payload;
//return {
//  ...state,
//  value,
// };
//  }
// default:
//   return state;
//}
//};
