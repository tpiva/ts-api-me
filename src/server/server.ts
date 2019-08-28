import { CoreModule } from '../core/core';
import * as http from 'http';
const { serverPort } = require('../config/env');

export class Server {
    private db;
    private express;

    constructor(databaseConnector) {
        this.express = new CoreModule().getExpress();
        this.upServer();
        // if (databaseConnector) {
        //     this.db = databaseConnector;
        //     this.express = new CoreModule().getExpress();
        //     this.syncDatabase();
        // }
    }

    private async syncDatabase() {
        try {
            const syncData = await this.db.sync();
            this.databaseSyncHandler(syncData);
        } catch(error) {
            this.databaseSyncErrorHandler(error);
        }
    }

    private databaseSyncErrorHandler(error: any) {
        console.log(`Can't connect to a database because ${error}`);
        this.upServer();
    }

    private databaseSyncHandler(databaseInfo: any) {
        const { options, config, modelManager } = databaseInfo;
        const { models } = modelManager;
        this.upServer();
        this.logDatabaseConnection({models, options, config});
    }

    private logDatabaseConnection({ models, options, config }: any) {
        const { dialect, host } = options;
        const { database, port } = config;
        if (dialect && host & port && database && models) {
            console.log(`Database dialect: ${dialect}`);
            console.log(`Database host: ${host}`);
            console.log(`Database port: ${port}`);
            console.log(`Database name: ${database}`);
            console.log(`Database tables: ${models}`);
        }
    }

    private upServer() {
        http.createServer(this.express)
        .listen(serverPort)
        .on('listening', this.onServerUp.bind(this, serverPort))
        .on('error', this.onServerStartupError.bind(this));
    }
    
    private onServerStartupError(error: NodeJS.ErrnoException) {
        console.log(`ERROR: ${error}`);
    }

    private onServerUp(port: number) {
        console.log(`Server is running on port ${port}`);
    }
}