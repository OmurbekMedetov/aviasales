import { useDispatch } from 'react-redux';
import { MyTrans } from '../../redux/actions/action-types';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import styles from './transplants.module.scss';

export default function TransPlants({ active }: { active: boolean }) {
  const dispatch = useDispatch();
  const transFormState = useTypedSelector((state) => state.transfers);
  return (
    <div className={active ? styles.div__container : styles.menu}>
      <ul className={styles.container__ul}>
        <li className={styles.container__li}>
          <h3 className={styles.h3}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
        </li>
        <li className={styles.container__li}>
          <input
            type="checkbox"
            className={styles.input}
            checked={transFormState.allTransfer}
            onClick={() => dispatch({ type: MyTrans.AllTransfer })}
          />
          <span className={styles.span}>Все</span>
        </li>
        <li className={styles.container__li}>
          <input
            type="checkbox"
            className={styles.input}
            checked={transFormState.noTransfer}
            onClick={() => dispatch({ type: MyTrans.NoTransfer })}
          />
          <span className={styles.span}>Без пересадок</span>
        </li>
        <li className={styles.container__li}>
          <input
            type="checkbox"
            className={styles.input}
            checked={transFormState.oneTransfer}
            onClick={() => dispatch({ type: MyTrans.OneTransfer })}
          />
          <span className={styles.span}>1 пересадка</span>
        </li>
        <li className={styles.container__li}>
          <input
            type="checkbox"
            className={styles.input}
            checked={transFormState.twoTransfer}
            onClick={() => dispatch({ type: MyTrans.TwoTransfer })}
          />
          <span className={styles.span}>2 пересадки</span>
        </li>
        <li className={styles.container__li}>
          <input
            type="checkbox"
            className={styles.input}
            checked={transFormState.threeTransfer}
            onClick={() => dispatch({ type: MyTrans.ThreeTransfer })}
          />
          <span className={styles.span}>3 пересадки</span>
        </li>
      </ul>
    </div>
  );
}
