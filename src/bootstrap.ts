import { Server } from '../src/server/server';
const { sequelize } = require('../src/entities');

(() => {
    new Server(sequelize);
})();