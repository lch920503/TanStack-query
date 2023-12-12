import { useMutation, useQueryClient } from "@tanstack/react-query";
import React, { useState } from "react";
import { postPostsInfoFetch } from "../data/api";
import { QueryKeys } from "../queryClient";
import PostList from "../components/PostList";

const Posts = () => {
  const [isSubmit, setIsSubmit] = useState(false);
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

    setIsSubmit(true);
  };

  return (
    <>
      <h1>Post 보여주기 (Mutate)</h1>
      <form onSubmit={onSubmit}>
        <button type="submit">데이터 보내기</button>
      </form>
      {isSubmit && <PostList />}
    </>
  );
};

export default Posts;
