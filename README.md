# Angular CLI proxy demo

This repository is a demo for how to setup proxying for running locally. This can be useful for simulating the environment your frontend will be deployed in.

To run locally, start each of the servers separately below by running the following commands. This should start:

* Video API on `http://localhost:10001`
* Library API on `http://localhost:10000`
* Catalog Server on `http://localhost:5000`
* Catalog on `http://localhost:4200`

Then visit: `http://localhost:4200/catalog/`

It should retrieve data from the Library and Video APIs and also config from the Catalog Server, the requests being proxied via localhost:4200 to their relevant targets as defined in `catalog/proxy.conf.json`.

# Video API

```
cd videoapi
npm run start
```

# Library API

```
cd libraryapi
npm run start
```

# Catalog Server

```
cd catalogserver
node server.js
```

# Catalog

```
cd catalog
npm run start
```