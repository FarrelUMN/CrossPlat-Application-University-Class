import axios from "axios";

const ENV = "https://jsonplaceholder.typicode.com/";

export const getPosts = () => {
  return axios.get(ENV + "posts");
};

export const getPostDetail = (id: number) => {
  return axios.get(ENV+"posts/"+id);
}

export const getUserDetail = (id: number) => {
  return axios.get(ENV+"users/"+id);
}

export const getCommentsByPost = (id: number) => {
  return axios.get(ENV + "posts/" + id + "/comments");
};

export const postData = (data: {
  title: string;
  body: string;
  userId: number;
}) => {
  return axios.post(ENV+"posts",data);
}