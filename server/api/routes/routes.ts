import { Application, Request, Response } from 'express';
import { request } from 'https';

class Routes {

    constructor(app: Application) {
        this.getRoutes(app);        
    }

    getRoutes(app: Application): void {
        app.route('/').get((_req: Request, res: Response) => res.send('hello'));
        app.route('/ola/:nome').get((req: Request, res: Response) => res.send(`Hello, ${req.params.nome}`));
    }
}

export default Routes;