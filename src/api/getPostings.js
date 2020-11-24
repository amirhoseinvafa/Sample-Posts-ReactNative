import client from './Client';

const endPoint = '/posts';
const getPostings = client.get(endPoint);

console.log(getPostings.data);

export default {
  getPostings,
};
