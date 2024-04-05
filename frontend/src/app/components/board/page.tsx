import React, { useState, useEffect } from "react";

interface User {
  id: number;
  fName: string;
  lName: string;
  email: string;
  phoneNum: string;
}

const Board: React.FC = () => {
  // use the User[] type for the users this.this.state
  const [users, setUsers] = useState<User[]>([]);

  // fetch users data from the backend
  const fetchUsers = async () => {
    try {
      const response = await fetch("http://192.168.5.20:3001/users");
      if (response.ok) {
        const data: User[] = await response.json();
        setUsers(data);
      } else {
        console.error("Fail to fetch users");
      }
    } catch (error) {
      console.error("error fetching users", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>User Information</h2>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.fName}</td>
              <td>{user.lName}</td>
              <td>{user.email}</td>
              <td>{user.phoneNum}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Board;
