const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = async (req, res) => {
  await createProxyMiddleware('/v1_0', {
    target: 'http://3.83.126.203',
    changeOrigin: true,
    pathRewrite: {
      '^/api/proxy/v1_0': ''
    }
  })(req, res);
};
