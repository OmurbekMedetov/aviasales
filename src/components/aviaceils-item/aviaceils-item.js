import styles from './aviaceils-item.module.scss';
import avias from './avia.png';

export default function AviaceilsItem() {
  return (
    <div>
      <li className={styles.container}>
        <div className={styles.price}>
          <h2 className={styles.h2}>13400Р</h2>
          <img src={avias} alt="noo" className={styles.img} />
        </div>
        <div className={styles.div__table}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.tr}>
                <td className={styles.td}>MOW - HKT</td>
                <td className={styles.td}>В ПУТИ</td>
                <td className={styles.td}>2 ПЕРЕСАДКИ</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>10:45 - 08:00</td>
                <td className={styles.td}>21ч 15м</td>
                <td className={styles.td}>HKG, JNB</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>MOW - HKT</td>
                <td className={styles.td}>В ПУТИ</td>
                <td className={styles.td}>1 ПЕРЕСАДКА</td>
              </tr>
              <tr className={styles.tr}>
                <td className={styles.td}>11:20 - 00:50</td>
                <td className={styles.td}>13ч 30м</td>
                <td className={styles.td}>HKG</td>
              </tr>
            </thead>
          </table>
        </div>
      </li>
    </div>
  );
}
