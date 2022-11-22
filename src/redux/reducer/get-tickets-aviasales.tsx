import { ITicket } from '../../types';
import { AviaAction, MyTrans } from '../actions/action-types';

interface InitialStateThunk {
  avia: ITicket[];
  loader: boolean;
}

const InitialStates: InitialStateThunk = {
  avia: [],
  loader: true,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const GetTickets = (state = InitialStates, action: AviaAction) => {
  if (action.type === MyTrans.ThunkAction) {
    return {
      avia: [...state.avia, ...action.payload],
    };
  }
  return state;
};
