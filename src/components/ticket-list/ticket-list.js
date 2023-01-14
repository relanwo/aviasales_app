/* eslint-disable no-unused-vars */
import './ticket-list.scss';
// import styles from './ticket-list.module.scss';
import { Button, Alert, Spin } from 'antd';
import Ticket from '../ticket/ticket';
import uniqid from 'uniqid';
import { useEffect, useState } from 'react';
// import { getSearchId, ticketsLoad, changeVisible, toggleFilter } from '../../redux/actions';
import { getSearchId, changeVisible, toggleFilter } from '../../redux/actions';
import { fetchTicketsLoad, fetchSearchId } from '../../redux/api-actions';
// import {fetchSearchId, fetchTicketsLoad} from '../../redux/api-actions'
import { useDispatch, useSelector } from 'react-redux';

export default function TicketList() {
	const dispatch = useDispatch();

	const tickets = useSelector((state) => state.ticketsReducer.tickets);
	const loading = useSelector((state) => state.ticketsReducer.loader);
	const visible = useSelector((state) => state.ticketsReducer.visible);
	const error = useSelector((state) => state.ticketsReducer.error);
	// const tickets = useSelector((state) => state.tickets);
	// const loading = useSelector((state) => state.loader);
	// const visible = useSelector((state) => state.visible);
	// const error = useSelector((state) => state.error);
	const checkAll = useSelector((state) => state.sidebarReducer.checkAll);
	const checkedList = useSelector((state) => state.sidebarReducer.checkedList);
	console.log(checkAll, checkedList);

	const filterState = useSelector((state) => {
  console.log('state >>>>>>', state.ticketsReducer)
  return state.filterReducer.filterState});
	// const tickets = useSelector((state) => state.filterReducer.filteredTickets);
	// console.log('filter >>>>>', filter);

	useEffect(() => {
  dispatch(fetchTicketsLoad());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
  

  const amountOfStops = {
    'Без пересадок': 0,
    '1 пересадка': 1,
    '2 пересадки': 2,
    '3 пересадки': 3,
  }

	// let elements = tickets.length ? (
	let elements = tickets
    // .map((ticket) => {
    //   if (checkAll) return ticket;
    //   let newarr = []
    //   for (let i=0; i <= checkedList.length; i++) {
    //     // console.log(checkedList[i])
    //     switch (checkedList[i]) {
    //       case 'Без пересадок': {
    //         if (ticket.segments[0].stops.length === 0) {
    //           newarr.push(ticket)
    //           // return ticket
    //         } 
    //         break
    //       }
    //       case '1 Пересадка': {
    //         if (ticket.segments[0].stops.length === 1) {
    //           // return ticket
    //           newarr.push(ticket)
    //         }
    //         break
    //       }
    //       case '2 Пересадки': {
    //         if (ticket.segments[0].stops.length === 2) {
    //           // return ticket
    //           newarr.push(ticket)
    //         }
    //         break
    //       }
    //       case '3 Пересадки': {
    //         if (ticket.segments[0].stops.length === 3) {
    //           // return ticket
    //           newarr.push(ticket)
    //         }
    //         break
    //       }
    //       default: {
    //         i++
    //         break
    //       }
    //   }}
    //   return newarr
    // })
  .sort((prev, next) =>
			filterState === 'cheap'
				? prev.price - next.price
				: next.segments[0].duration +
				  next.segments[1].duration -
				  prev.segments[0].duration +
				  prev.segments[1].duration
		)
		// .filter((ticket) => {
		//   if (checkAll) return true;

		//   const amountOfStops = {
		//     'Без пересадок': 0,
		//     '1 пересадка': 1,
		//     '2 пересадки': 2,
		//     '3 пересадки': 3,
		//   }

		//   for (let key in filterState) {
		//   //   // console.log(amountOfStops[key])
		//   //   if (amountOfStops[key] === (ticket.segments[0].stops.length || ticket.segments[1].stops.length)) {
		//   //     return true
		//   //   }
		//   // }
    //   switch (key) {
    //     case 'Без пересадок': {
    //       return ticket.segments[0].stops.length === 0;
    //     }
    //     case '1 Пересадка': {
    //       return ticket.segments[0].stops.length === 1;
    //     }
    //     case '2 Пересадки': {
    //       return ticket.segments[0].stops.length === 2;
    //     }
    //     case '3 Пересадки': {
    //       return ticket.segments[0].stops.length === 3;
    //     }
    //     default: {
    //       break;
    //     }
    //   }}
		//   // return true
		//   // return filterState.forEach(element => {
		//   //   // console.log(amountOfStops[element])
		//   //   // console.log(ticket.segments[1].stops.length)
		//   //   if (amountOfStops[element] === (ticket.segments[0].stops.length || ticket.segments[1].stops.length)) {
		//   //     // console.log(ticket)
		//   //     return (amountOfStops[element] === (ticket.segments[0].stops.length || ticket.segments[1].stops.length))
		//   // }
		//   // });

		//   // console.log(newArr)
		//   // return newArr
		// })
    .filter(
      (item) => {
        if (checkAll) return true
        console.log('checkedList',checkedList)
  
        let bool
        for (let i = 0; i < checkedList.length; ++i) {
          // console.log(a[index]);
          bool = amountOfStops[checkedList[i]] === item.segments[0].stops.length ||
            amountOfStops[checkedList[i]] === item.segments[1].stops.length
        }
        return bool
      })
		.slice(0, visible)
		// .sort((data) => bubbleSort(data, filter))
		.map((res) => <Ticket key={uniqid()} data={res} />);
	// ) : (
	// 	<Alert
	// 		message="Рейсов, подходящих под заданные фильтры, не найдено"
	// 		type="info"
	// 		showIcon
	// 	/>
	// );

	const hasData = !(loading || error);
	const spinner = loading ? <Spin size="large" /> : null;
	const hasError = error ? (
		<Alert message={error} type="error" showIcon />
	) : null;
	const content =
		hasData && elements.length ? (
			<div className="tickets">{elements}</div>
		) : null;
	const showMoreButton =
		hasData && elements.length ? (
			<Button
				className="show-more"
				type="primary"
				block
				onClick={() => dispatch(changeVisible())}
			>
				Показать еще 5 билетов!
			</Button>
		) : null;
	const noTickets =
		hasData && !elements.length ? (
			<Alert
				message="Рейсов, подходящих под заданные фильтры, не найдено"
				type="info"
				showIcon
			/>
		) : null;

	return (
		<>
			{hasError}
			{noTickets}
			{spinner}
			{content}
			{showMoreButton}
		</>
		// <div className="tickets">
		// 	{/* {tickets.length &&
		// 		tickets.map((res) => {
		// 			return <Ticket key={uniqid()} data={res} />;
		// 		})} */}
		// 	{elements}
		// 	{showMoreButton}
		// 	{/* <Button className={styles['show-more']} type="primary" block>
		// 		Показать еще 5 билетов!
		// 	</Button> */}
		// </div>
	);
}
