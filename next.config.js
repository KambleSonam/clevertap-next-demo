/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
		return [
			{
				source: '/clevertap/:path*',
				destination: 'https://api.clevertap.com/1/:path*',
			},
		]
	},
}

module.exports = nextConfig
