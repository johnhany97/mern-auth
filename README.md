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
To run the project execute the following command using Node
```
npm run start
```
To run the `nodemon` server, execute the following command
```
npm run server
```


