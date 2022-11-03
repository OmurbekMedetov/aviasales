/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Tabs } from 'antd';
import { useState } from 'react';
import AviaceilsItem from '../aviaceils-item/aviaceils-item';
import logo from './Logo.png';
import styles from './aviaceils.module.scss';
import '../../index.scss';
import TransPlants from '../transplants/transplants';

export default function Aviaceils() {
  //   const el = avia.map((items) => {
  //     <AviaceilsItem key={items.key} />;
  //   });
  const [menu, setMenu] = useState(false);
  return (
    <div>
      <TransPlants active={menu} />
      <nav className={styles.nav}>
        <div className={styles.burger} onClick={() => setMenu(!menu)}>
          <span className={styles.burger__span} />
        </div>
      </nav>
      <img src={logo} alt="nooo" className={styles.img} />
      <Tabs defaultActiveKey="1">
        <Tabs.TabPane tab="САМЫЙ ДЕШЕВЫЙ" key="item-1">
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
