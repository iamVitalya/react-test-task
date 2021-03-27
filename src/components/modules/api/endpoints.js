export const CREATE_USER = 'create_user';
export const DELETE_USER = 'delete_user';
export const USERS = 'users';
export const POST = 'post';
export const POSTS = 'posts';

const ENDPOINTS = {
  [CREATE_USER]: {
    uri: '/users',
    method: 'POST'
  },
  [DELETE_USER]: {
    uri: '/users',
    method: 'DELETE'
  },
  [USERS]: {
    uri: '/users',
    method: 'GET'
  },
  [POST]: {
    uri: '/post/',
    method: 'GET'
  },
  [POSTS]: {
    uri: '/posts',
    method: 'GET'
  }
};

export default ENDPOINTS;