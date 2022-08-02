import { Profile } from '../components/profile/profile'
import { Statistics } from '../components/statistics/statistics'
import { Friendlist } from '../components/friendlist/friendlist'
import { TransactionHistory } from '../components/transactions/transactions'
import user from '../data/user.json'
import data from '../data/data.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
import style from './utils/app.module.css'



export const App = () => {
  return (
    <div className={style.main}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        key={user.tag}       
      />
      <Statistics
        props={data}
        title='Upload stats'
      />
      <Friendlist
        props={friends} />
      <TransactionHistory
        props={transactions} />
    </div>
  );
};
