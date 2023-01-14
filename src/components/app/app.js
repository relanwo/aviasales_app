import Sidebar from '../sidebar/sidebar';
import Filter from '../filter/filter';
import TicketList from '../ticket-list/ticket-list';

import './app.scss';
import 'antd/dist/reset.css';

function App() {
  return (
    <>
      <header className="header">
        <img className="header__logo" alt="logo" src="../../imgs/lodo.png" />
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
