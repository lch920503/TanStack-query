import { useQuery } from "@tanstack/react-query";
import React from "react";
import { QueryKeys } from "../queryClient";
import { getPostsInfoFetch } from "../data/api";

const PostList = () => {
  const { data: postData, isLoading } = useQuery({
    queryKey: [QueryKeys.POST],
    queryFn: getPostsInfoFetch,
  });

  return (
    <>
      {isLoading ? (
        <p>is Loading...</p>
      ) : (
        <ul>
          {postData.slice(0, 10).map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default PostList;
