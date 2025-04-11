const isDev = process.env.NODE_ENV === 'development';

const CONFIG = {
  isDev,
  RECAPTCHA_SITE_KEY: process.env.REACT_APP_RECAPTCHA_SITE_KEY,
  API_URL_ROOT: process.env.REACT_APP_API_URL_ROOT || 'https://api-minigame.shopdunk.com',
  API_URL_ROOT_PAYMENT:
    process.env.REACT_APP_API_PAYMENT_URL_ROOT ||
    'https://api-preorder.shopdunk.com',
  BASENAME: '/',
  BASENAME_COMING: '/coming-soon',
  DEPOSIT: 5000,
  PROMAX_DEPOSIT_CURRENT: 3352,
};

export default CONFIG;
