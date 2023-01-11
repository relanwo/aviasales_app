import './ticket.scss';
// import styles from './ticket.module.scss';
import { add } from 'date-fns';
import { intlFormat } from 'date-fns';

import { Card, Layout } from 'antd';
const { Header, Content } = Layout;

export default function Ticket({ data }) {
	// console.log('tocket props >', props);

  const priceFormater = (value) => `${value.toString().slice(0, -3)} ${value.toString().slice(-3)} Р`
  const durationFormater = (value) => `${Math.floor(value/60)}ч ${value%60}м`
  const stopsFormater = (value) => {
    if (value.length) {
      return value.length === 1 ? '1 пересадка':`${value.length} пересадки`
    } else return 'Без пересадок'
  } 

  const dateFormater = (value) => intlFormat(new Date(value), { hour: '2-digit', minute: '2-digit' })
  const dateAdding = (date, addition) => add(new Date(date), { minutes: addition })

	const { id, price, segments } = data;

	return (
		<Card className="ticket" key={id}>
			<Header className="ticket__header">
				<p className="price">{priceFormater(price)}</p>
				<img className="logo" alt="logo" src="../../imgs/S7.png"></img>
			</Header>
			<Content className="ticket__content">
				<div className='container'>
					<p className="description">{`${segments[0].origin} – ${segments[0].destination}`}</p>
					<p className="values">{dateFormater(segments[0].date)} – {dateFormater(dateAdding(segments[0].date, segments[0].duration))}</p>
				</div>
				<div className='container'>
					<p className="description">В пути</p>
					<p className="values">
						{durationFormater(segments[0].duration)}
					</p>
				</div>
				<div className='container'>
					<p className="description">{stopsFormater(segments[0].stops)}</p>
					<p className="values">{segments[0].stops.join(', ')}</p>
				</div>
			</Content>
			<Content className="ticket__content">
				<div className='container'>
					<p className="description">{`${segments[1].origin} – ${segments[1].destination}`}</p>
					<p className="values">{dateFormater(segments[1].date)} – {dateFormater(dateAdding(segments[1].date, segments[1].duration))}</p>
				</div>
				<div className='container'>
					<p className="description">В пути</p>
					<p className="values">{durationFormater(segments[1].duration)}</p>
				</div>
				<div className='container'>
					<p className="description">{stopsFormater(segments[1].stops)}</p>
					<p className="values">{segments[1].stops.join(', ')}</p>
				</div>
			</Content>
		</Card>
	);
}