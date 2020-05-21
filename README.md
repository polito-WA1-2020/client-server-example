# Example React Client-Server Application

This repository contains an example of an ultra-simplified (*) React application that communicates with a REST API, and shows the 3 different ways of supporting the client-server integration.

Each branch of the project corresponds to a different deployment of the project.

(*) for example, there is practically no error handling nor any fancy visual effect.

## master - separated servers

In the [master](https://github.com/polito-WA1-2020/client-server-example/tree/master) branch, you have two different folders, `client` (the React app) and `server` (an Express application offering REST API endpoints).

The applications can be examined separately. The React application uses a _fake_ database implemented as a list.

You may run the React client with `npm start` in the `client` directory (after `npm install`, of course).

You may run the API server with `node server.js` (or `nodemon server.js`) in the `server` directory (after `npm install`, of course).


## Two servers with CORS

The branch [two_servers_CORS](https://github.com/polito-WA1-2020/client-server-example/tree/two_servers_CORS) integrates the client and the server with:

 * a "real" `API.js` layer using `fetch` to call the remote API
 * configuration of the `CORS` middleware in the API server

You should start the server, first (`cd server; nodemon server.js`), and then load the client (`cd client; npm start`), on two terminal windows.

## Two servers with PROXY

The branch [two_servers_PROXY](https://github.com/polito-WA1-2020/client-server-example/tree/two_servers_PROXY) modified the previous branch and exploits the _proxy_ capabilities of the React development server:

 * `package.json` on the client has been modified with the `proxy` property
 * the server does not need CORS anymore
 * the `API.js` in the client will send `fetch` requests to the React server (that will proxy them to the REST server).

 You should start the server, first (`cd server; nodemon server.js`), and then load the client (`cd client; npm start`), on two terminal windows.

## Deploying the Build of the React app

In the branch [deploy_the_build](https://github.com/polito-WA1-2020/client-server-example/tree/deploy_the_build), the production version of the React app has been created, and copied/served under the Express server:

 * `npm run build` on the client was used to create the `build` folder (after this, the `client` directory is not used anymore)
 * in the server directory, `cp -r ../client/build .` was used to copy the React app as a static set of files
 * the `server.js` has been modified to serve the `build` folder as a static root
 * `server.js` may now run on port 3000, as the _main_ (and only) running server.

 You only need to start the server (`cd server; nodemon server.js`).
