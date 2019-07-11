const env = process.env.NODE_ENV || 'development';

import config from './config.json';

const envConfig = config[env];

Object.keys(envConfig).forEach((key) => {
  process.env[key] = envConfig[key];
});
