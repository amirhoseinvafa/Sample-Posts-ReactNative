import client from './Client';

const endPoint = '/posts';
const GetPosts = () => client.get(endPoint);
const GetOnePost = (id) => client.get(`/posts/${id}`);

export default {
  GetPosts,
  GetOnePost,
};
