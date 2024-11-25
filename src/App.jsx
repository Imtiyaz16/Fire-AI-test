import styles from './App.module.css';
import AggregateInsight from './components/AggregateInsight/AggregateInsight';
import CardList from './components/CardList/CardList';
import Header from './components/Header/Header';
import MostTraded from './components/MostTraded/MostTraded';
import NavBar from './components/NavBar/NavBar';
import Notifications from './components/Notification/Notification';
import OrderHistory from './components/OrderHistory/OrderHistory';
import TotalBalance from './components/TotalBalance/TotalBalance';

const App = () => {
  return (
    <div className={styles.app}>
      <NavBar/>
      <Header />
      <main>
        <div className={styles.AnalyticSection}>
          <div className={styles.analytics_left}>
           <TotalBalance/>
           <AggregateInsight/>
          </div>
          
          <div className={styles.analytics_right}>
           <CardList/>
           <MostTraded/>
           <Notifications/>
          </div>
        </div>

        <div className={styles.orderHistorySection}>
          <OrderHistory />
        </div>
      </main> 
    </div>
  );
};

export default App;
