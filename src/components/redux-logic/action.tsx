export enum MyTrans {
  All = 'All',
  Without = 'Without',
  OneFlight = 'OneFlight',
  TwoFlight = 'TwoFlight',
  ThreeFlight = 'ThreeFlight',
}
interface IAll {
  type: MyTrans.All;
}
interface IWithout {
  type: MyTrans.Without;
}
interface IOneFlight {
  type: MyTrans.OneFlight;
}
interface ITwoFlight {
  type: MyTrans.TwoFlight;
}
interface IThreeFlight {
  type: MyTrans.ThreeFlight;
}

export type AviaAction = IAll | IWithout | IOneFlight | ITwoFlight | IThreeFlight;
