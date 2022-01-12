export const PAGE_URL = {
  LOGIN: '/login',
  EMAIL_LOGIN: '/email-login',
  REGISTER: '/register',
  FIND_PASSWORD: '/find-password',
  RESET_PASSWORD: '/reset-password',
  APP: '/app',
};

export type PageURL = keyof typeof PAGE_URL;
