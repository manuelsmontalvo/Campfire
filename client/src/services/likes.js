import api from './api-helper';

export const togglePostLikes = async (id) => {
  const resp = await api.post(`/toggle-post-like/${id}`);
  return resp;
}

export const toggleCommentLikes = async (id) => {
  const resp = await api.post(`/toggle-comment-like/${id}`);
  return resp;
}