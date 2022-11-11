import { AviaAction, MyTrans } from './action';

interface InitialState {
  all?: boolean;
  noTransfer?: boolean;
  oneTransfer?: boolean;
  twoTransfer?: boolean;
  threeTransfer?: boolean;
  change?: boolean;
}

const InitialStates: InitialState = {
  all: false,
  noTransfer: false,
  oneTransfer: false,
  twoTransfer: false,
  threeTransfer: false,
  // change: true,
};

export const ReducerAvia = (state = InitialStates, action: AviaAction): InitialState => {
  if (action.type === MyTrans.All) {
    if (state.all === true) {
      return {
        all: false,
        noTransfer: false,
        oneTransfer: false,
        twoTransfer: false,
        threeTransfer: false,
        // change: false,
      };
    } else {
      return {
        all: true,
        noTransfer: true,
        oneTransfer: true,
        twoTransfer: true,
        threeTransfer: true,
        // change: true,
      };
    }
  }
  if (action.type === MyTrans.Without) {
    if (state.noTransfer === true) {
      return {
        noTransfer: false,
      };
    } else {
      return {
        noTransfer: true,
      };
    }
  }
  if (action.type === MyTrans.OneFlight) {
    if (state.oneTransfer === true) {
      return {
        oneTransfer: false,
      };
    } else {
      return {
        oneTransfer: true,
      };
    }
  }
  if (action.type === MyTrans.TwoFlight) {
    if (state.twoTransfer === true) {
      return {
        twoTransfer: false,
      };
    } else {
      return {
        twoTransfer: true,
      };
    }
  }
  if (action.type === MyTrans.ThreeFlight) {
    if (state.threeTransfer === true) {
      return {
        threeTransfer: false,
      };
    } else {
      return {
        threeTransfer: true,
      };
    }
  }
  return state;
  // if (action.payload) {
  //   return {
  //     all: false,
  //     noTransfer: false,
  //     oneTransfer: false,
  //     twoTransfer: false,
  //     threeTransfer: false,
  //     change: false,
  //   };
  // } else {
  //   return {
  //     all: true,
  //     noTransfer: true,
  //     oneTransfer: true,
  //     twoTransfer: true,
  //     threeTransfer: true,
  //     change: true,
  //   };
  // switch (action.type) {
  //   case MyTrans.All:
  //     return {
  //       all: true || false,
  //       noTransfer: true,
  //       oneTransfer: true,
  //       twoTransfer: true,
  //       threeTransfer: true,
  //       change: true,
  //     };
  //   case MyTrans.Without:
  //     return {
  //       noTransfer: !true,
  //     };
  //   case MyTrans.OneFlight:
  //     return {
  //       oneTransfer: !true,
  //     };
  //   case MyTrans.TwoFlight:
  //     return {
  //       twoTransfer: !true,
  //     };
  //   case MyTrans.ThreeFlight:
  //     return {
  //       threeTransfer: !true,
  //     };
  //   default:
  //     return state;
  // }
};
