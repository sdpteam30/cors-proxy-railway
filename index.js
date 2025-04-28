const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Allow all CORS
app.use(cors());

// Proxy all requests starting with /proxy
app.use('/proxy', createProxyMiddleware({
    target: 'https://mail.tutanota.com',
    changeOrigin: true,
    pathRewrite: { '^/proxy': '' },
}));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`CORS Proxy server running on port ${port}`);
});
