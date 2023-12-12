import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com";

// 유저 정보 api get
export const getUserInfoFetch = async () => {
  const res = await axios.get(`${BASE_URL}/users`);
  return res.data;
};

// post 정보 api post
export const postPostsInfoFetch = async (data) => {
  const res = await axios.post(`${BASE_URL}/posts`, data);
  if (res.status === 201) return res.data;
  else return console.error("error!");
};

export const getPostsInfoFetch = async () => {
  const res = await axios.get(`${BASE_URL}/posts`);
  return res.data;
};
