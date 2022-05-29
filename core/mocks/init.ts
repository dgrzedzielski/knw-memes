export const initMsw = () => {
  if (
    process.env.NEXT_PUBLIC_API_MOCKING === 'enabled' &&
    process.env.NODE_ENV !== 'production'
  ) {
    // eslint-disable-next-line global-require
    const { startMSW } = require('.');
    startMSW();
  }
};
