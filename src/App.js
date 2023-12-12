import React from "react";
import User from "./pages/User";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <>
      <h1>User정보 입니다</h1>
      <User />
      <Posts />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
};

export default App;
