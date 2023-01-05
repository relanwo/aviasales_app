/* eslint-disable no-unused-vars */
import Sidebar from '../sidebar/sidebar';
import Filter from '../filter/filter';
import TicketList from '../ticket-list/ticket-list';

import 'antd/dist/reset.css';
import { Layout } from 'antd';

import './app.scss';
// import { useDispatch, useSelector } from 'react-redux';
// import styles from './app.module.scss';

const { Header, Sider, Content } = Layout;

function App() {
  // const dispatch = useDispatch()
  // const cash = useSelector(state => state.cash)
	// console.log(cash);

  // const addCash = () => {
  //   dispatch({ type: 'CHOOSE_CHEAP', payload: 5 })
  // }

  // const getCash = () => {
  //   dispatch({ type: 'CHOOSE_FAST', payload: 3 })
  // }
  function addTodo(state, action) {}
  function removeTodo(state, action) {}
  function toggleTodoComplete(state, action) {}
  
	return (
		<>
			<header className="header">
				<img 
          // onClick={()=>addCash()} 
          className="header__logo" alt="logo" src=".../imgs/Logo.png"></img>
			</header>
			<section 
        // onClick={()=>getCash()} 
        className="layout">
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
