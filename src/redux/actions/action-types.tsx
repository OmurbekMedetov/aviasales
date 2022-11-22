import { ITicket } from '../../types';

export enum MyTrans {
  AllTransfer = 'All',
  NoTransfer = 'Without',
  OneTransfer = 'OneFlight',
  TwoTransfer = 'TwoFlight',
  ThreeTransfer = 'ThreeFlight',
  ThunkAction = 'ThunkAction',
}
interface IAllTransfer {
  type: MyTrans.AllTransfer;
}
interface INoTransfer {
  type: MyTrans.NoTransfer;
}
interface IOneTransfer {
  type: MyTrans.OneTransfer;
}
interface ITwoTransfer {
  type: MyTrans.TwoTransfer;
}
interface IThreeTransfer {
  type: MyTrans.ThreeTransfer;
}
interface IThunkAction {
  type: MyTrans.ThunkAction;
  payload: ITicket[];
}

export type AviaAction = IAllTransfer | INoTransfer | IOneTransfer | ITwoTransfer | IThreeTransfer | IThunkAction;
