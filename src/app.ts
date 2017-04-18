/**
 * Main application entry point where our node application
 * is boostrapped and initiated.
**/
import * as http from 'http';
import { ApplicationFactory, Server } from 'ts-bootstrap';
import { apiRouteBuilder } from './api/apiRouteBuilder';

const appInstance = new ApplicationFactory(apiRouteBuilder).express;
const httpServer = http.createServer(appInstance);
const server = new Server(httpServer);
server.startServer();

module.exports = server;
