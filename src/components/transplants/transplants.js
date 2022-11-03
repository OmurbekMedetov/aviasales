import Proptypes from 'prop-types';
import styles from './transplants.module.scss';

export default function TransPlants({ active }) {
  return (
    <div className={active ? styles.div__container : styles.menu}>
      <ul className={styles.container__ul}>
        <li className={styles.container__li}>
          <h3 className={styles.h3}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
        </li>
        <li className={styles.container__li}>
          <input type="checkbox" className={styles.input} />
          <span className={styles.span}>Все</span>
        </li>
        <li className={styles.container__li}>
          <input type="checkbox" className={styles.input} />
          <span className={styles.span}>Без пересадок</span>
        </li>
        <li className={styles.container__li}>
          <input type="checkbox" className={styles.input} />
          <span className={styles.span}>1 пересадка</span>
        </li>
        <li className={styles.container__li}>
          <input type="checkbox" className={styles.input} />
          <span className={styles.span}>2 пересадки</span>
        </li>
        <li className={styles.container__li}>
          <input type="checkbox" className={styles.input} />
          <span className={styles.span}>3 пересадки</span>
        </li>
      </ul>
    </div>
  );
}

TransPlants.propTypes = {
  active: Proptypes.bool.isRequired,
};
