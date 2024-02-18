export const endpoints = {
  auth: {
    login: () => `/account/login/user`,
    loginPartner: () => `/account/login/partner`,
    logout: () => `/account/logout`,
    registerUser: () => `/account/register/user`,
    registerPartner: () => "/account/register/partner",
    refresh: () => `/account/refresh_token`,
    confirmUser: () => `/account/confirmation/user`,
    confirmPartner: () => `/account/confirmation/partner`,
    forgotPassword: () => `/account/confirmation/forgot_password`,
    resetPassword: () => `account/confirmation/reset_password`,
    validateBusinessName: () => `/validation/business_name`,
    validateEmail: () => `/validation/email`,
  },
  cms: {
    city: {
      get: () => `/manager/cms/city`,
    },
    serviceCategory: {
      get: () => `manager/cms/service_category`,
    },
  },
  partner: {
    staff: {
      staffmembers: () => "/app/partner/staff",
    },
  },
};