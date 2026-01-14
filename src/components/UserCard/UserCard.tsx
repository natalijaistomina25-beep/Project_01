import type { FC } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
};

export const UserCard: FC<User> = ({ id, name, email, avatar }) => {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "12px",
      marginBottom: "12px",
      display: "flex",
      alignItems: "center",
      gap: "12px"
    }}>
      <img src={avatar} alt={name} width={60} style={{ borderRadius: "50%" }} />
      <div>
        <h3>{name}</h3>
        <p>{email}</p>
        <a href={`/users/${id}`}>View Profile</a>
      </div>
    </div>
  );
};





// import type { FC } from "react";
// import type User from "../../types/User";
// import { Link } from "react-router-dom";

// export const UserCard: FC<User> = (user) => {
//   return (
//     <div>
//       <h3>
//         <Link to={`/users/${user.id}`}>{user.name}</Link>
//       </h3>
//       {/* <img src={user.avatar} alt={user.name}  /> */}
//       <p>Avatar: {user.avatar}</p>
//       <p>{user.email}</p>
//     </div>
//   );
// };



// import type { FC } from "react";
// import { Link } from "react-router-dom";
// import s from "./UserCard.module.css";
// import type User from "../../types/User";

// export const UserCard: FC<User> = (user) => {
//   return (
//     <div className={s.card}>
//       <h3>
//         <Link to={`/users/${user.id}`}>{user.name}</Link>
//       </h3>
//       <img src={user.avatar}alt={user.name} width={80} />
//       <p> {user.email}</p>
     
//     </div>
//   );
// };