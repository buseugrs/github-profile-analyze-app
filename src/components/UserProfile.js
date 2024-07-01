import React from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {
  const user = useSelector((state) => state.github.user);

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div>
      <h2>User Information</h2>
      <div>
        <img src={user.avatar_url} alt="Avatar" />
        <h3>{user.login}</h3>
        <p>Followers: {user.followers}</p>
      </div>
    </div>
  );
};

export default UserProfile;
