export const endpoints = {
  auth: {
    login: () => `/account/login/user`,
    registerUser: () => "/account/register/user",
    refresh: () => '/account/refresh_token',
  },
};