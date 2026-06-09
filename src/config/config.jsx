const ENV = process.env.NODE_ENV || 'development';

const configs = {
  development: {
    API_URL: 'https://dev-api.example.com',
    DEBUG: true,
  },
  production: {
    API_URL: 'https://api.example.com',
    DEBUG: false,
  },
  test: {
    API_URL: 'https://test-api.example.com',
    DEBUG: false,
  },
};

const config = configs[ENV];

export default config;