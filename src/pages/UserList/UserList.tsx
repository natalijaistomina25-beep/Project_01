// import { useEffect, useState, Suspense } from "react";
// import type User from "../../types/User";
// import { UserCard } from "../../components/UserCard/UserCard";


// export default function UserList() {
//   const [users, setUsers] = useState<User[]>([]);

//   async function fetchUsers() {
//     const res = await fetch("https://fakeapi.platzi.com/en/rest/users/");
//     const data = await res.json();
//     setUsers(data);
//   }

//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   return (
//     <div>
//       <h2>Users List</h2>
//       <Suspense fallback={<p>Loading users...</p>}>
//         {users.map((user) => (
//           <UserCard key={user.id} {...user} />
//         ))}
//       </Suspense>
//     </div>
//   );
// }


import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

export default function Userlist() {
  const [users, setUsers] = useState<User[]>([]);

  async function fetchUsers() {
    const res = await fetch("https://api.escuelajs.co/api/v1/users/");
    const data = await res.json();
    setUsers(data);
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {users.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link> - {user.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}