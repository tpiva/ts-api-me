import * as http from 'http';
import Api from './api/api';

const models = require('./models');
const config = require('./config/env/config')();
const server = http.createServer(Api);

models.sequelize.sync().then(() => {
    server.listen(config.serverPort);
    server.on('listening', () => console.log(`Server is running at port ${config.serverPort}`));
    server.on('error', (error: NodeJS.ErrnoException) => console.log(`Occured an error ${error}`));
});
