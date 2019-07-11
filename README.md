# Authentication: MERN

Demonstrated in this project is a MERN stack project that demonstrates a full authentication cycle following with modern JavaScript standards.

## Acknowledgment

This is based off of a tutorial published by [Rishi Prasad in Bits and Pieces](https://blog.bitsrc.io/build-a-login-auth-app-with-mern-stack-part-1-c405048e3669) but extended to use ES6, Docker, and some other additional bits and pieces (pun intended) all over. Thanks, Rishi, for the amazing guide!

## Setup
You'll need to add your config file which has the required props for your various enviornments, an example is demonstrated as follows:
```json
{
  "development": {
    "MONGO_URI": "mongo://name:password@some_dev_link_for_dev_db:port",
    "SECRET_OR_KEY": "someSecretY'all"
  },
  "prod": {
    "MONGO_URI": "mongo://name:password@some_dev_link_for_prod_db:port",
    "SECRET_OR_KEY": "someProdSecretY'all"
  }
}
```
You'll also need to run a node installation
```
npm i
```

## Running
Development mode
```
npm run dev
```
Production mode
```
npm run prod
```
Watch mode (using `nodemon`)
```
npm run watch
```
Using Docker
```
docker run -p 5000:5000 johnhany97/mern-auth
```
