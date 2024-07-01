import React from "react";
import { Provider } from "react-redux";
import store from "./store"; 

import "./App.css";
import SearchForm from "./components/SearchForm";
import UserProfile from "./components/UserProfile";
import RepoList from "./components/RepoList";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchForm />
        <UserProfile />
        <RepoList />
      </div>
    </Provider>
  );
}

export default App;
