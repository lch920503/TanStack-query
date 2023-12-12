import { useQuery } from "@tanstack/react-query";
import React from "react";
import { QueryKeys } from "../queryClient";
import { getUserInfoFetch } from "../data/api";

const User = () => {
  // Query : useQuery
  const {
    data: userData,
    isLoading,
    status,
  } = useQuery({
    queryKey: [QueryKeys.USER],
    queryFn: getUserInfoFetch,
  });

  return (
    <>
      <h1>User Name</h1>
      {isLoading ? (
        <p>is Loading...</p>
      ) : (
        <>
          {status === "success" && (
            <ul>
              {userData.map((data) => (
                <li key={data.id}>{data.name}</li>
              ))}
            </ul>
          )}
        </>
      )}
    </>
  );
};

export default User;
