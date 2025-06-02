import React from "react";
import UserCard from "./UserCard";
import userData from "../data/userData";
const User = () => {
  let data = [1, 2, 3, 4, 5, 5, 6, 7, 7, 8, 8, 9, 66, 7, 68, 568, 56, 8];
  return (
    <div className="container p-4">
    <div className="row">
      {userData.map((ele, index) => {
      
        const { address, id, username, password, email } = ele;
        return (
          <UserCard
            key={index}
            address={address}
            username={username}
            password={password}
            email={email}
          />
        );
      })}
    </div>
    </div>
  );
};

export default User;
