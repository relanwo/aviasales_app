/* eslint-disable no-unused-vars */
import './ticket-list.scss';
// import styles from './ticket-list.module.scss';
import { Button, Alert, Spin } from 'antd';
import Ticket from '../ticket/ticket';
import uniqid from 'uniqid';
import { useEffect, useState } from 'react';
import { getSearchId, ticketsLoad, changeVisible, toggleFilter } from '../../redux/actions';
// import {fetchSearchId, fetchTicketsLoad} from '../../redux/api-actions'
import { useDispatch, useSelector } from 'react-redux';

export default function TicketList() {
	const dispatch = useDispatch();

	const tickets = useSelector((state) => state.ticketsReducer.tickets);
	const loading = useSelector((state) => state.ticketsReducer.loader);
	const visible = useSelector((state) => state.ticketsReducer.visible);
	const error = useSelector((state) => state.ticketsReducer.error);

	const filter = useSelector((state) => state.filterReducer.filterState);
	console.log('filter >>>>>', filter);

	useEffect(() => {
    // dispatch(getSearchId())
		dispatch(ticketsLoad());
    // dispatch(fetchSearchId());
    // dispatch(fetchTicketsLoad());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [filter]);

  // useEffect(() => {
	// 	// dispatch(toggleFilter());
  //   // console.log('filter toggled', filter)
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// });

	// function bubbleSort(arr, filter) {
  //   let param;
  //   if (filter === 'cheap') {
  //     param = 'price'
  //   } else {
  //     param = 'duration'
  //   }
	// 	for (let i = 0; i < arr.length; i++) {
	// 		for (let j = 0; j < arr.length; j++) {
	// 			if (arr[j].segment[0].param > arr[j + 1].segment[0].param) {
	// 				let tmp = arr[j].param;
	// 				arr[j].segment[0].param = arr[j + 1].segment[0].param;
	// 				arr[j + 1].segment[0].param = tmp;
	// 			}
	// 		}
	// 	}
	// 	return arr;
	// }

  // const filterSorter = (data) => {
  //   filter === 'cheap'
  //   ? data.sort(
	// 		(prev, next) => prev.price - next.price
	// 	)
  //   : data.sort(
	// 		(prev, next) =>
	// 			prev.segments[0].duration + prev.segments[1].duration -
	// 			(next.segments[0].duration + next.segments[1].duration)
  //   )
  // };

	let elements = tickets.length ? (
		tickets
      // .sort((data) => filterSorter(data))
			.slice(0, visible)
			// .sort((data) => bubbleSort(data, filter))
			.map((res) => <Ticket key={uniqid()} data={res} />)
	) : (
		<Alert
			message="Рейсов, подходящих под заданные фильтры, не найдено"
			type="info"
			showIcon
		/>
	);

	const hasData = !(loading || error);
	const spinner = loading ? <Spin size="large" /> : null;
	const hasError = error ? (
		<Alert message={error} type="error" showIcon />
	) : null;
	const content = hasData ? <div className="tickets">{elements}</div> : null;
	const showMoreButton =
		hasData && tickets.length ? (
			<Button
				className="show-more"
				type="primary"
				block
				onClick={() => dispatch(changeVisible())}
			>
				Показать еще 5 билетов!
			</Button>
		) : null;

	return (
		<>
			{hasError}
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
