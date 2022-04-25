/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  reactStrictMode: true,
}

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: !isProd
  }
});
 
module.exports = nextConfig
 