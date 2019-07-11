# Authentication: MERN

Demonstrated in this project is a MERN stack project that demonstrates a full authentication cycle following with modern JavaScript standards.

## Setup
You'll need to add your config file which has the required props for your various enviornments, an example is demonstrated as follows:
```json
{
  "development": {
    "MONGO_URI": "mongo://name:password@some_dev_link_for_dev_db:port"
  },
  "prod": {
    "MONGO_URI": "mongo://name:password@some_dev_link_for_prod_db:port"
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
