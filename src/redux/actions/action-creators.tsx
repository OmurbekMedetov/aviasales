import { ITicket } from '../../types';
import { MyTrans } from '../actions/action-types';

interface TicketsType {
  type: string;
  payload: ITicket[];
}

export const tickedLoad = () => {
  return async (dispath: TicketsType) => {
    const allTicket = [];
    const searchIds = await fetch('https://front-test.dev.aviasales.ru/search');
    const { searchId } = await searchIds.json();
    const ticketsResponse = await fetch(`https://front-test.dev.aviasales.ru/tickets?searchId=${searchId}`);
    const { tickets } = await ticketsResponse.json();
    allTicket.push(...tickets);
    dispath({ type: MyTrans.ThunkAction, payload: allTicket });
  };
};
