import { Request, Response } from 'express';
import * as lodash from 'lodash';
import Handlers from '../../api/responses/handlers';
import User from './service';

class UserController {

    constructor() {}

    getAll(req: Request, res: Response) {
        User
            .getAll()
            .then(lodash.partial(Handlers.onSuccess, res))
            .catch(lodash.partial(Handlers.onError, res, `Error ao buscar todos os usuários`));
    }

    createUser(req: Request, res: Response) {
        User
            .create(req.body)
            .then(lodash.partial(Handlers.onSuccess, res))
            .catch(lodash.partial(Handlers.dbErrorHandler, res))
            .catch(lodash.partial(Handlers.onError, res, `Error ao criar um usuário`));
    }

    getById(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        User
            .getById(userId)
            .then(lodash.partial(Handlers.onSuccess, res))
            .catch(lodash.partial(Handlers.onError, res, `Error ao buscar um usuário`));
    }

    updateUser(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        const props = req.body;
        User
            .update(userId, props)
            .then(lodash.partial(Handlers.onSuccess, res))
            .catch(lodash.partial(Handlers.onError, res, `Error ao atualizar um usuário`));
    }

    deleteUser(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        User
            .delete(userId)
            .then(lodash.partial(Handlers.onSuccess, res))
            .catch(lodash.partial(Handlers.onError, res, `Error ao deletar um usuário`));
    }
}

export default UserController;