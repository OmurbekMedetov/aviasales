import styles from './transplants.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { MyTrans } from '../redux-logic/action';
function TransPlants({ active }) {
  const dispatch = useDispatch();
  const allPlanet: boolean = useSelector((state) => state.all);
  const withPlanet: boolean = useSelector((state) => state.noTransfer);
  const onePlanet: boolean = useSelector((state) => state.oneTransfer);
  const twoPlanet: boolean = useSelector((state) => state.twoTransfer);
  const threePlanet: boolean = useSelector((state) => state.threeTransfer);
  const allFunc = () => {
    dispatch({ type: MyTrans.All });
  };
  const NoTrans = () => {
    dispatch({ type: MyTrans.Without });
  };
  const OneTrans = () => {
    dispatch({ type: MyTrans.OneFlight });
  };
  const TwoTrans = () => {
    dispatch({ type: MyTrans.TwoFlight });
  };
  const ThreeTrans = () => {
    dispatch({ type: MyTrans.ThreeFlight });
  };
  return (
    <div className={active ? styles.div__container : styles.menu}>
      <ul className={styles.container__ul}>
        <li className={styles.container__li}>
          <h3 className={styles.h3}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
        </li>
        <li className={styles.container__li}>
          <input type="checkbox" className={styles.input} checked={allPlanet} onClick={allFunc} />
          <span className={styles.span}>Все</span>
        </li>
        <li className={styles.container__li}>
          <input type="checkbox" className={styles.input} checked={withPlanet} onClick={NoTrans} />
          <span className={styles.span}>Без пересадок</span>
        </li>
        <li className={styles.container__li}>
          <input type="checkbox" className={styles.input} checked={onePlanet} onClick={OneTrans} />
          <span className={styles.span}>1 пересадка</span>
        </li>
        <li className={styles.container__li}>
          <input type="checkbox" className={styles.input} checked={twoPlanet} onClick={TwoTrans} />
          <span className={styles.span}>2 пересадки</span>
        </li>
        <li className={styles.container__li}>
          <input type="checkbox" className={styles.input} checked={threePlanet} onClick={ThreeTrans} />
          <span className={styles.span}>3 пересадки</span>
        </li>
      </ul>
    </div>
  );
}
export default TransPlants;
