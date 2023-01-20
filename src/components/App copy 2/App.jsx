import logo from '../../assets/images/logo.png';
import Filter from '../Filter/Filter';
import Sidebar from '../Sidebar/Sidebar';
import TicketList from '../TicketList/TicketList';
import './App.scss';
import 'antd/dist/reset.css';

function App() {
  return (
    <>
      <header className="header">
        <img className="header__logo" alt="logo" src={logo} />
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
}

export default App;
