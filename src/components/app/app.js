/* eslint-disable no-unused-vars */
import Sidebar from '../sidebar/sidebar';
import Filter from '../filter/filter';
import TicketList from '../ticket-list/ticket-list';

import logo from '../../imgs/logo.png';
import './app.scss';
import 'antd/dist/reset.css';
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

function App() {

	return (
		<>
			<header className="header">
				<img
					className="header__logo"
					alt="logo"
					src={logo}
				></img>
			</header>
			<section
				className="layout"
			>
				<Sidebar />
				<main className="main">
					<Filter />
					<TicketList />
				</main>
			</section>
		</>
	);
}

export default App;
