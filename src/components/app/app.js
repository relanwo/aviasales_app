/* eslint-disable no-unused-vars */
import Sidebar from '../sidebar/sidebar';
import Filter from '../filter/filter';
import TicketList from '../ticket-list/ticket-list';

import 'antd/dist/reset.css';
import { Layout } from 'antd';

import './app.scss';
// import styles from './app.module.scss';

const { Header, Sider, Content } = Layout;

function App() {
	// console.log(classes);
	return (
		<>
			<header className="header">
				<img className="header__logo" alt="logo" src=".../imgs/Logo.png"></img>
			</header>
			<section className="layout">
				<Sidebar />
				<main className="main">
					<Filter />
					<TicketList />
				</main>
			</section>
		</>
	);
  		// <Layout>
		// 	<Header className='header'>
		// 		<img className={'header__logo'} alt="logo" src=""></img>
		// 	</Header>
		// 	<Layout>
		// 		<Sider>
		// 			<Sidebar />
		// 		</Sider>
		// 		<Content>
		// 			<Filter />
		// 			<TicketList />
		// 		</Content>
		// 	</Layout>
		// </Layout>
}

export default App;
