import axios from 'axios';

export const getUsers = async () => (
  await axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
)

export const getPosts = async () => (
  await axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.data)
    .catch((err) => {
      throw err
    })
)


export const getComments = async () => (
  await axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((res) => res.data)
    .catch((err) => {
      throw err;
    })
)
