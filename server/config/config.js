import config from './config.json';

const env = process.env.NODE_ENV || 'development';

const envConfig = config[env];

Object.keys(envConfig).forEach((key) => {
  process.env[key] = envConfig[key];
});
