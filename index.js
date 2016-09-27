'use strict';

const Hapi = require('hapi');
const oauth = require('./../');

// Get secret stuff from the environment
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.OAUTH_CLIENT_SECRET;
const REDIRECT_URI = process.env.OAUTH_REDIRECT_URI;
const STATE = process.env.OAUTH_STATE;
const SCOPE = process.env.OAUTH_SCOPE || 'notifications';

const oauth2 = oauth.create({
  client: {
    id: CLIENT_ID,
    secret: CLIENT_SECRET
  },
  auth: {
    tokenHost: 'https://todoist.com',
    tokenPath: '/oauth/access_token',
    authorizePath: '/oauth/authorize'
  }
});

const authorizationUri = oauth2.authorizationCode.authorizeURL({
  redirect_uri: REDIRECT_URI,
  scope: SCOPE,
  state: STATE
});

const server = new Hapi.Server();
server.connection({ port: 8080 });

server.route({
  method: 'GET',
  path: '/auth',
  handler: (_, reply) => reply.redirect(authorizationUri)
});

server.route({
  method: 'GET',
  path: '/hello',
  handler: (request, reply) => reply('hello world')
});

// Start the server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});


