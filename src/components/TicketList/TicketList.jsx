import './TicketList.scss';
import { Alert, Button, Spin } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import uniqid from 'uniqid';

import { changeVisible } from '../../store/actions';
import { fetchSearchId } from '../../store/api-actions';
import Ticket from '../Ticket/Ticket';

export default function TicketList() {
  const dispatch = useDispatch();

  const tickets = useSelector((state) => state.ticketsReducer.tickets);
  const loading = useSelector((state) => state.ticketsReducer.loader);
  const visible = useSelector((state) => state.ticketsReducer.visible);
  const error = useSelector((state) => state.ticketsReducer.error);

  const checkAll = useSelector((state) => state.sidebarReducer.checkAll);
  const checkedList = useSelector((state) => state.sidebarReducer.checkedList);

  const filterState = useSelector((state) => state.filterReducer.filterState);

  useEffect(() => {
    dispatch(fetchSearchId());
  }, []);

  const amountOfStops = {
    'Без пересадок': 0,
    '1 пересадка': 1,
    '2 пересадки': 2,
    '3 пересадки': 3,
  };

  const elements = tickets
    .filter((item) => {
      if (checkAll) return true;
      let bool;
      for (let i = 0; i < checkedList.length; i++) {
        bool = amountOfStops[checkedList[i]] === item.segments[0].stops.length
          || amountOfStops[checkedList[i]] === item.segments[1].stops.length;
      }
      return bool;
    })
    .sort((prev, next) => (filterState === 'cheap'
      ? prev.price - next.price
      : prev.segments[0].duration
          + prev.segments[1].duration
          - (next.segments[0].duration + next.segments[1].duration)))
    .slice(0, visible)
    .map((res) => <Ticket key={uniqid()} data={res} />);

  const hasData = !(loading || error);
  const spinner = loading ? <Spin size="large" /> : null;
  const hasError = error ? <Alert message={error} type="error" showIcon /> : null;
  const content = hasData && elements.length ? <div className="tickets">{elements}</div> : null;
  const showMoreButton = hasData && elements.length ? (
    <Button className="show-more" type="primary" block onClick={() => dispatch(changeVisible())}>
      Показать еще 5 билетов!
    </Button>
  ) : null;
  const noTickets = hasData && !elements.length ? (
    <Alert message="Рейсов, подходящих под заданные фильтры, не найдено" type="info" showIcon />
  ) : null;

  return (
    <>
      {hasError}
      {noTickets}
      {spinner}
      {content}
      {showMoreButton}
    </>
  );
}
