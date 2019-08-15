import { Application } from 'express';
import UserRoutes from '../../modules/User/routes';
import TokenRoutes from '../../modules/auth/auth';

class Routes {

    private router: UserRoutes;

    constructor() {
        this.router = new UserRoutes();
    }

    initRoutes(app: Application, auth: any): void {
        app.route('/api/users/all').all(auth.config().authenticate()).get(this.router.index);
        app.route('/api/users/create').all(auth.config().authenticate()).post(this.router.create);
        app.route('/api/users/:id').all(auth.config().authenticate()).get(this.router.findOne);
        app.route('/api/users/:id/update').all(auth.config().authenticate()).put(this.router.update);
        app.route('/api/users/:id/destroy').all(auth.config().authenticate()).delete(this.router.delete);
        app.route('/token').post(TokenRoutes.auth);
    }
}

export default new Routes();