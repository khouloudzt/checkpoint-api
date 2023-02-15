import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        setListOfUsers(res.data);
      })
  }, []);

  return (
    <ul style={{listStyle: 'none', padding: 0 }}>
      {listOfUsers.map(user => (
        <li key={user.id} style={{ margin: '1rem 0', background: 'lightgray', padding: '1rem' }}>
          <h3>{user.name}</h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </li>
      ))}
    </ul>
  );
}

export default UserList;