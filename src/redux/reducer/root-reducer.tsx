import { combineReducers } from 'redux';
import { FilterReducer } from './filter-aviasales';
import { GetTickets } from './get-tickets-aviasales';
export const combineReduce = combineReducers({
  transfers: FilterReducer,
  tickets: GetTickets,
});

export type IRootState = ReturnType<typeof combineReduce>;
