const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://dr-booking.vercel.app/', 
      changeOrigin: true,
    })
  );
};
