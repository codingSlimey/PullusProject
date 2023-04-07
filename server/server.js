const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({ target: 'https://pullusafrica.com.ng:8080/apis/v1/pullus', changeOrigin: true }));

app.listen(3000, () => {
  console.log('Proxy server listening on port 3000');
});