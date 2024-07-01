import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchUser } from "../features/githubSlice";

const SearchForm = () => {
  const dispatch = useDispatch(); // to achieve Redux store
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      dispatch(fetchUser(username));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter GitHub User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchForm;
