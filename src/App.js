import React from 'react';

import Profile from './components/task01/Profile';
import Statistics from './components/task02/Statistics';
import FriendList from './components/task03/FriendList';
import TransactionHistory from './components/task04/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transaction.json';



function App() {
  return (
    <>                
      <Profile {...user} />
    {/* <Profile
    name={user.name}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    /> */}
      
      <Statistics title="Upload stats" stats={statisticalData} />
      {/* <Statistics stats={statisticalData} /> */}
      
      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />

    </> 
  );
}

export default App;