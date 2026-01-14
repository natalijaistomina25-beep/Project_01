// import { useEffect, useState } from "react";
// import { useParams, Link } from "react-router-dom";
// import type User from "../../types/User";

// export default function UserPage() {
//     const { id } = useParams();
//     const [user, setUser] = useState<User | undefined>(undefined);

//     async function fetchUser(id: string | undefined) {
//         if (!id) return;
//         const res = await fetch(`https://fakeapi.platzi.com/en/rest/users/${id}`);
//         const data = await res.json();
//         setUser(data);
//     }

//     useEffect(() => {
//         fetchUser(id);
//     }, [id]);
//     if (!user) return
//     <p>Loading user...</p>;

//     return (
//         <div>
//             <h2>{user.name}</h2>
//             <p>Email: {user.email}</p>
//             <img src={user.avatar} alt={user.name} width={100} />
//             <br />
//             <Link to="/users">Back to users list</Link>
//         </div >
//     );
// }

import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

export default function UserPage() {
  const { id } = useParams();
  const [user, setUser] = useState<User | null>(null);

  async function fetchUser(id: string | undefined) {
    if (!id) return;
    const res = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`);
    const data = await res.json();
    setUser(data);
  }

  useEffect(() => {
    fetchUser(id);
  }, [id]);

  if (!user) return <p>Loading user...</p>;

  return (
    <div>
      <h2>{user.name}</h2>
      <img src={user.avatar} alt={user.name} width={100} />
      <p>Email: {user.email}</p>
      <Link to="/users">Back to Users List</Link>
    </div>
  );
}