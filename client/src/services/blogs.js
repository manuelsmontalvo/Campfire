import api from "./api-helper";

export const getAllBlogs = async () => {
  const resp = await api.get('/blogs')
  return resp.data
}

export const getOneBlog = async (id) => {
  const resp = await api.get(`/blogs/${id}`);
  return resp.data;
}

export const updateBlog = async (id, blogData) => {
  const resp = await api.put(`/blogs/${id}`, { blog: blogData });
  return resp.data
}

export const createBlog = async (blogData) => {
  const resp = await api.post('/blogs', { blog: blogData })
  return resp.data
}

export const deleteblog = async (id) => {
  const resp = await api.delete(`/blogs/${id}`);
  return resp;
}