import { Tabs } from 'antd';
import { useState } from 'react';
import AviaceilsItem from '../aviaceils-item/aviaceils-item';
import logo from '../../images/Logo.png';
import styles from './aviaceils.module.scss';
import '../../index.scss';
import TransPlants from '../transplants/transplants';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import useActions from '../../redux/hooks/useActions';
import { useEffect } from 'react';

export default function Aviaceils() {
  const [menu, setMenu] = useState(false);
  const [tickets, setTickets] = useState(5);
  const { tickedLoad } = useActions();
  const allTickets = useTypedSelector((state: any) => state.tickets.avia);
  const allTicketsSlice = allTickets.slice(0, tickets);
  useEffect(() => {
    tickedLoad();
  }, []);
  const allTicketsSort = allTicketsSlice.map((item: any) => (
    <AviaceilsItem
      key={Math.random() * 400}
      price={item.price}
      carrier={item.carrier}
      segments1={item.segments[0]}
      segments2={item.segments[1]}
    />
  ));
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
            {allTicketsSort.length === 0 ? <div className={styles.loader}></div> : allTicketsSort}
          </ul>
          <div className={styles.ticketDiv}>
            {allTicketsSort.length !== 0 ? (
              <button
                className={styles.fiveTickets}
                type="button"
                onClick={() => {
                  setTickets((el) => el + 5);
                }}
              >
                Показать еще 5 билетов
              </button>
            ) : null}
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="САМЫЙ БЫСТРЫЙ" key="item-2">
          <TransPlants active={menu} />
          <ul className={styles.container}>
            {allTicketsSort.length === 0 ? <div className={styles.loader}></div> : allTicketsSort}
          </ul>
          <div className={styles.ticketDiv}>
            {allTicketsSort.length !== 0 ? (
              <button
                className={styles.fiveTickets}
                type="button"
                onClick={() => {
                  setTickets((el) => el + 5);
                }}
              >
                Показать еще 5 билетов
              </button>
            ) : null}
          </div>
        </Tabs.TabPane>
        <Tabs.TabPane tab="ОПТИМАЛЬНЫЙ" key="item-3">
          <TransPlants active={menu} />
          <ul className={styles.container}>
            {allTicketsSort.length === 0 ? <div className={styles.loader}></div> : allTicketsSort}
          </ul>
          <div className={styles.ticketDiv}>
            {allTicketsSort.length !== 0 ? (
              <button
                className={styles.fiveTickets}
                type="button"
                onClick={() => {
                  setTickets((el) => el + 5);
                }}
              >
                Показать еще 5 билетов
              </button>
            ) : null}
          </div>
        </Tabs.TabPane>
      </Tabs>
    </div>
  );
}
