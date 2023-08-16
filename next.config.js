/** @type {import('next').NextConfig} */
const nextConfig = { env:{
  API_HOST: process.env.API_HOST,
  X_CSRF_TOKEN: process.env.X_CSRF_TOKEN,
},
}

module.exports = nextConfig
