# Authentication: MERN

Demonstrated in this project is a MERN stack project that demonstrates a full authentication cycle following with modern JavaScript standards.

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
