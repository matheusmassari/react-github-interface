import React, { useContext } from "react";
import { Info, Repos, User, Search, Navbar, Loading } from "../components";
import { GithubContext } from "../context/context";

const Dashboard = () => {
  const { isLoading } = useContext(GithubContext);

  return (
    <main>
      <Navbar />
      <Search />
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Info />
          <User />
          <Repos />
        </>
      )}
    </main>
  );
};

export default Dashboard;
