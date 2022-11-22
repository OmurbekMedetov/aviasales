import Aviaceils from '../aviaceils/aviaceils';
import styles from './app.module.scss';
import 'antd/dist/antd.css';

export default function App() {
  return (
    <div className={styles.active}>
      <Aviaceils />
    </div>
  );
}
