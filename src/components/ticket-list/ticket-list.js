// import './ticket-list.scss';
import styles from './ticket-list.module.scss';
import { Button } from 'antd';
import Ticket  from '../ticket/ticket';

export default function TicketList() {
	return (
		<div className={styles['tickets']}>
			<Ticket />
      <Button 
        className={styles['show-more']}
        type="primary" block>
          Показать еще 5 билетов!
      </Button>
		</div>
	);
}
