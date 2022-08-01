import { Profile } from '../components/profile/profile'
import { Statistics } from '../components/statistics/statistics'
import {Friendlist} from '../components/friendlist/friendlist'
import user from '../components/path/user.json'
import data from '../components/path/data.json'
import friends from '../components/path/friends.json'



export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        display: 'flex',
        flexDirection: 'column',

      }}
    >
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
      />
      
      <Friendlist
        props={friends} />
      
    </div>
  );
};
