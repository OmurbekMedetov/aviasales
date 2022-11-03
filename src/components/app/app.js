import { useState } from 'react';
import Aviaceils from '../aviaceils/aviaceils';
import styles from './app.module.scss';
import 'antd/dist/antd.css';

export default function App() {
  const [avia, setAvia] = useState([]);
  return (
    <div className={styles.active}>
      <Aviaceils avia={avia} />
    </div>
  );
}
