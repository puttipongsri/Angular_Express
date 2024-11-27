const api = 'http://localhost:8000';

export const environment = {
  production: false,
  api,
  APISIGNUPUSER: `${api}/users/post`,
  APILOGIN: `${api}/users/login`,
};
