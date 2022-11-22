import { MyTrans, AviaAction } from '../actions/action-types';

interface InitialState {
  allTransfer?: boolean;
  noTransfer?: boolean;
  oneTransfer?: boolean;
  twoTransfer?: boolean;
  threeTransfer?: boolean;
}

const InitialStates: InitialState = {
  allTransfer: true,
  noTransfer: true,
  oneTransfer: true,
  twoTransfer: true,
  threeTransfer: true,
};

// eslint-disable-next-line @typescript-eslint/default-param-last
export const FilterReducer = (state = InitialStates, action: AviaAction): InitialState => {
  const { allTransfer, noTransfer, oneTransfer, twoTransfer, threeTransfer } = state;
  switch (action.type) {
    case MyTrans.AllTransfer:
      return {
        allTransfer: !allTransfer,
        noTransfer: !noTransfer,
        oneTransfer: !oneTransfer,
        twoTransfer: !twoTransfer,
        threeTransfer: !threeTransfer,
      };
    case MyTrans.NoTransfer:
      if (
        allTransfer === true &&
        noTransfer === true &&
        oneTransfer === true &&
        twoTransfer === true &&
        threeTransfer === true
      ) {
        return { ...state, noTransfer: !noTransfer, allTransfer: !allTransfer };
      }
      if (
        oneTransfer === true &&
        twoTransfer === true &&
        threeTransfer === true &&
        noTransfer === false &&
        allTransfer === false
      ) {
        return { ...state, noTransfer: !noTransfer, allTransfer: !allTransfer };
      }
      return { ...state, noTransfer: !noTransfer };
    case MyTrans.OneTransfer:
      if (
        allTransfer === true &&
        noTransfer === true &&
        oneTransfer === true &&
        twoTransfer === true &&
        threeTransfer === true
      ) {
        return { ...state, oneTransfer: !oneTransfer, allTransfer: !allTransfer };
      }
      if (
        oneTransfer === false &&
        twoTransfer === true &&
        threeTransfer === true &&
        noTransfer === true &&
        allTransfer === false
      ) {
        return { ...state, oneTransfer: !oneTransfer, allTransfer: !allTransfer };
      }
      return { ...state, oneTransfer: !oneTransfer };
    case MyTrans.TwoTransfer:
      if (
        allTransfer === true &&
        noTransfer === true &&
        oneTransfer === true &&
        twoTransfer === true &&
        threeTransfer === true
      ) {
        return { ...state, twoTransfer: !twoTransfer, allTransfer: !allTransfer };
      }
      if (
        oneTransfer === true &&
        twoTransfer === false &&
        threeTransfer === true &&
        noTransfer === true &&
        allTransfer === false
      ) {
        return { ...state, twoTransfer: !twoTransfer, allTransfer: !allTransfer };
      }
      return { ...state, twoTransfer: !twoTransfer };
    case MyTrans.ThreeTransfer:
      if (
        allTransfer === true &&
        noTransfer === true &&
        oneTransfer === true &&
        twoTransfer === true &&
        threeTransfer === true
      ) {
        return { ...state, threeTransfer: !threeTransfer, allTransfer: !allTransfer };
      }
      if (
        oneTransfer === true &&
        twoTransfer === true &&
        threeTransfer === false &&
        noTransfer === true &&
        allTransfer === false
      ) {
        return { ...state, threeTransfer: !threeTransfer, allTransfer: !allTransfer };
      }
      return { ...state, threeTransfer: !threeTransfer };
    default:
      return state;
  }
};
