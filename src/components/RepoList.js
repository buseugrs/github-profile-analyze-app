import React from "react";
import { useSelector } from "react-redux";

const RepoList = () => {
  const repos = useSelector((state) => state.github.repos);

  return (
    <div>
      <h2>Repo List</h2>
      <ul>
        {repos.map((repo) => {
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
              {repo.name}
            </a>
            <p>Language: {repo.language}</p>
            <p>Stars: {repo.stargazers_count}</p>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default RepoList;
