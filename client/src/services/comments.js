import api from "./api-helper";

export const createComment = async (commentData) => {
  const resp = await api.post(`/comments`, { comment: commentData });
  return resp.data
}

export const deleteComment = async (id) => {
  const resp = await api.delete(`/comments/${id}`);
  return resp;
}