// import './ticket-list.scss';
import styles from './ticket-list.module.scss';

import Ticket from '../ticket/ticket';

export default function TicketList() {
	return (
		<div className={styles['tickets']}>
			<Ticket />
		</div>
	);
}
