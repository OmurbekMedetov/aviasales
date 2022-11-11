import { Tabs } from 'antd';
import { useState } from 'react';
import AviaceilsItem from '../aviaceils-item/aviaceils-item';
import logo from './Logo.png';
import styles from './aviaceils.module.scss';
import '../../index.scss';
import TransPlants from '../transplants/transplants';

export default function Aviaceils() {
  const [menu, setMenu] = useState<boolean>(false);
  return (
    <div>
      <img src={logo} alt="nooo" className={styles.img} />
      <nav className={styles.nav}>
        <div className={styles.burger} onClick={() => setMenu(!menu)}>
          <span className={styles.burger__span} />
        </div>
      </nav>
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="САМЫЙ ДЕШЕВЫЙ" key="item-1">
          <TransPlants active={menu} />
          <ul className={styles.container}>
            <AviaceilsItem />
          </ul>
        </Tabs.TabPane>
        <Tabs.TabPane tab="САМЫЙ БЫСТРЫЙ" key="item-2">
          <span>Hello</span>
        </Tabs.TabPane>
        <Tabs.TabPane tab="ОПТИМАЛЬНЫЙ" key="item-3">
          <span>Hi</span>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}

// Aviaceils.propTypes = {
//   avia: PropTypes.instanceOf(Array).isRequired,
// };
