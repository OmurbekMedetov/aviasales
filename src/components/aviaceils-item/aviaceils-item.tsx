import styles from './aviaceils-item.module.scss';
import { priceFormat } from '../../utils/price-format';
import { getStartTime, getEndTime, getTravelTime } from '../../utils/date-formats';
import { ISegment } from '../../types';

interface Props {
  price: number;
  carrier: string;
  segments1: ISegment;
  segments2: ISegment;
}
export default function AviaceilsItem({ price, carrier, segments1, segments2 }: Props) {
  return (
    <div>
      <li className={styles.container}>
        <div className={styles.price}>
          <h2 className={styles.h2}>{priceFormat(price)} Р</h2>
          <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="aviaPicture" className={styles.img} />
        </div>
        <div className={styles.div__table}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  {segments1.origin} - {segments1.destination}
                </td>
                <td className={styles.td}>В ПУТИ</td>
                <td className={styles.td}>{segments1.stops.length} ПЕРЕСАДОК</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  {getStartTime(segments1.date)} - {getEndTime(segments1.date, segments1.duration)}
                </td>
                <td className={styles.td}>{getTravelTime(segments1.duration)}</td>
                <td className={styles.td}>{segments1.stops.join(', ')}</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  {segments2.origin} - {segments2.destination}
                </td>
                <td className={styles.td}>В ПУТИ</td>
                <td className={styles.td}>{segments2.stops.length} ПЕРЕСАДОК</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>
                  {getStartTime(segments2.date)} - {getEndTime(segments2.date, segments2.duration)}
                </td>
                <td className={styles.td}>{getTravelTime(segments2.duration)}</td>
                <td className={styles.td}>{segments2.stops.join(', ')}</td>
              </tr>
            </thead>
          </table>
        </div>
      </li>
    </div>
  );
}
