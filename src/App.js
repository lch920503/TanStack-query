import React from "react";
import User from "./pages/User";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <>
      <h1>User 정보 보여주기</h1>
      <User />
      <Posts />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default App;
