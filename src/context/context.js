import React, { useState, useEffect, createContext, useContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [repos, setRepos] = useState(mockRepos);
  const [followers, setFollowers] = useState(mockFollowers);

  /* ==> Request States <== */
  const [requests, setRequests] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  /* ==> Error state <== */
  const [error, setError] = useState({ show: false, msg: "" });

  /* ==> Search GET User Function <== */
  const searchGithubUser = async (user) => {
    toggleError();
    setIsLoading(true)
    const response = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (response) {
      setGithubUser(response.data);
      const { login, followers_url } = response.data;
      
      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ]).then((results) => {
        const [repos, followers] = results
        const fulfilled = "fulfilled"
        if(repos.status === fulfilled) {
          setRepos(repos.value.data)
        }
        if(followers.status === fulfilled) {
          setFollowers(followers.value.data)
        }
        setIsLoading(false)
      }).catch(err => console.log(err))

    } else {
      toggleError(true, "There is no such user!");
    }
  };
  /* ==> Search GET User Function END <== */

  /* ==> Check Rate <== */
  const checkRequest = () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(
            true,
            "Sorry, you have exceeded your hourly requests limit!"
          );
        }
      })
      .catch((error) => console.log(error));
  };
  /* ==> Check Rate END <== */

  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }

  useEffect(() => {
    checkRequest();
  }, []);

  return (
    <GithubContext.Provider
      value={{
        githubUser,
        repos,
        followers,
        requests,
        error,
        searchGithubUser,
        isLoading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
