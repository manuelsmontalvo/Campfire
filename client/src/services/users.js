import api from "./api-helper";

export const getAllUserAndPosts = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data
}

export const createUser = async (userData) => {
  const resp = await api.post(`/users`, { user: userData });
  return resp.data
}

export const updateUser = async (id, userData) => {
  const resp = await api.put(`/users/${id}`, { user: userData });
  return resp.data
}

export const deleteUser = async (id) => {
  const resp = await api.delete(`/users/${id}`);
  return resp
}
