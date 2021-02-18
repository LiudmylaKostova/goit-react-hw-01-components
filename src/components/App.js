import React from 'react';
import Profile from './task01/Profile';
import user from './task01/user.json';
import statisticalData from './task02/statistical-data.json';
import Statistics from './task02/Statistics';
import friends from './task03/friends.json';
import FriendList from './task03/FriendList';
import transactions from './task04/transaction.json';
import TransactionHistory from './task04/TransactionHistory';


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