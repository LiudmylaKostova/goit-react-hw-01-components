import React from 'react';
import Profile from './task01/Profile';
import user from './task01/user.json';



function App() {
  return (
    <>
      
          {/* <Profile user={user} /> */}
          <Profile {...user} />
      
    </>
  );
}

export default App;