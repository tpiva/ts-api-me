import * as express from 'express';
import { Application, Request, Response, NextFunction } from 'express';
import * as morgan from 'morgan';
import * as bodyParser from 'body-parser';
import { RouterModule } from './router/routes';
// import ResponseHandlers from './handlers/response-handlers';
// import AuthService from '../modules/auth/auth-service';

const { secret } = require('../config/env');
export class CoreModule {
    private _express: Application;
    private authService;
    private routerModule: RouterModule;

    constructor() {
        this._express = express();
        // this.authService = new AuthService(secret).setStrategy();
        this.configExpress();
        this.routerModule = new RouterModule(this._express);
        this.router();
    }

    public getExpress(): Application {
        return this._express;
    }

    private configExpress(): void {
        this._express.use(this.configHeaders.bind(this));
        this._express.use(morgan('dev'));
        this._express.use(bodyParser.urlencoded({ extended: true }));
        this._express.use(bodyParser.json());
        // this._express.use(ResponseHandlers.errorHandlerApi);
        // this._express.use(this.authService.initialize());
    }

    private router(): void {
        //this.routerModule.exposeRoutes(this.authService.authenticate);
        this.routerModule.exposeRoutes();
    }

    private configHeaders(req: Request, res: Response, next: NextFunction) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
        next();
    }
}