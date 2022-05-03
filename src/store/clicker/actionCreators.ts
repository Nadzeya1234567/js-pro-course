import { createAction } from "@reduxjs/toolkit";
import { ClickerActionTypes } from "./types";

//export const _setValue = (value: number): ClickerActionType => ({
//  type: ClickerActionTypes.SET_VALUE,
//  payload: value,
//});

export const setValue = createAction<number>(ClickerActionTypes.SET_VALUE);
export const shiftValue = createAction<number>(ClickerActionTypes.SHIFT_VALUE);
