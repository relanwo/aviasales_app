import './ticket.scss';
// import styles from './ticket.module.scss';

import { Card, Layout } from 'antd';
const { Header, Content } = Layout;

export default function Ticket() {
	return (
    <Card className='ticket'>
      <Header className='ticket__header'>
        <p className='price'>13 400 Р </p>
        <img className="logo" alt="logo" src=".../imgs/S7.png"></img>
      </Header>
      <Content className='ticket__content'>
        <div>
          <p className='description'>MOW – HKT</p>
          <p className='values'>10:45 – 08:00</p>
        </div>
        <div>
          <p className='description'>MOW – HKT</p>
          <p>10:45 – 08:00</p>
        </div>
        <div>
          <p className='description'>MOW – HKT</p>
          <p>10:45 – 08:00</p>
        </div>
      </Content>
    </Card>
  );
}
