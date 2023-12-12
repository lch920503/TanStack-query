import { useMutation, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { postPostsInfoFetch } from "../data/api";
import { QueryKeys } from "../queryClient";
import PostList from "../components/PostList";

const Posts = () => {
  const queryClient = useQueryClient();
  const { mutate: postMutate } = useMutation({
    mutationFn: (data) => postPostsInfoFetch(data),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [QueryKeys.POST],
        refetchType: "active",
      });
    },
    onError: () => {
      console.error("error");
    },
  });

  const onSubmit = (e) => {
    e.preventDefault();

    const post = {
      userId: 1,
      title: "mutate post title",
      body: "mutate post body",
    };

    postMutate(post);

    console.log("클릭!!!");
  };

  return (
    <>
      <h1>Mutate</h1>
      <form onSubmit={onSubmit}>
        <button type="submit">데이터 보내기</button>
      </form>
      <PostList />
    </>
  );
};

export default Posts;
