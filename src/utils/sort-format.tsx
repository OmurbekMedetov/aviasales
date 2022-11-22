// import { ITicket } from '../types';

// export const SortTickets = (ticket: ITicket, sortBy: 'price' | 'cheap' | 'optimal') => {
//   ticket.sort((a, b) => {
//     if (sortBy === 'price') {
//       return a.price - b.price;
//     }
//     if (sortBy === 'cheap') {
//       return a.segments[0].duration + b.segments[0].duration - (a.segments[1].duration + b.segments[1].duration);
//     }
//     if (sortBy === 'optimal') {
//       return (
//         a.price -
//         b.price -
//         (a.segments[0].duration + b.segments[0].duration - (a.segments[1].duration + b.segments[1].duration))
//       );
//     }
//   });
// };
