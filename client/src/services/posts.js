import api from "./api-helper";


export const getPost = async (id) => {
  const resp = await api.get(`/posts/${id}`);
  return resp.data;
}

export const createPost = async (postData) => {
  const resp = await api.post(`/posts`, { post: postData });
  return resp.data
}

export const updatePost = async (id, postData) => {
  const resp = await api.put(`/posts/${id}`, { post: postData });
  return resp.data
}

export const deletePost = async (id) => {
  const resp = await api.delete(`/posts/${id}`);
  return resp
}

