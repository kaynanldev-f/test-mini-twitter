import { api } from "../api/axios";

export const getPosts = async () => {
  const { data } = await api.get("/posts");
  return data;
};

export const createPost = async (post: any) => {
  const { data } = await api.post("/posts", post);
  return data;
};

export const likePost = async (id: string) => {
  const { data } = await api.post(`/posts/${id}/like`);
  return data;
};
