import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "../../interface/counter";

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState, (state) => state.counter);

export const getChennal = createSelector(getCounterState, (state) => state.chennal);