export type ClickerStateType = {
  value: number;
};

export enum ClickerActionTypes {
  SET_VALUE = "SET_VALUE",
  SHIFT_VALUE = "SHIFT_VALUE",
}

type SetValueAction = {
  type: ClickerActionTypes.SET_VALUE;
  payload: number;
};

type ShiftValueAction = {
  type: ClickerActionTypes.SHIFT_VALUE;
  payload: number;
};

export type ClickerActionType = SetValueAction | ShiftValueAction;
