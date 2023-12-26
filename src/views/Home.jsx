import React from 'react'
import useStore from '../store'
import { useEffect } from 'react';

function Home() {
  const getUsers = useStore(state => state.getUsersGlobal);
  const users = useStore(state => state.users);

  useEffect(() => {
    getUsers(); // Call the method to fetch users when the component mounts
  }, [getUsers]); 

  return (
    <div>
      This is the home page
      {users.map((user)=>(<p key={user._id}>{user.firstName}</p>))}
    </div>
  )
}

export default Home