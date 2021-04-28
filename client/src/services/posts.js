import api from "./api-helper";

export const getAllUserPosts = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data
}

