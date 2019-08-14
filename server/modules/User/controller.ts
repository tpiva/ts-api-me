import { Request, Response } from 'express';
import * as lodash from 'lodash';
import { onError } from '../../api/responses/errorHandler';
import { onSuccess } from '../../api/responses/successHandler';
import { dbErrorHandler } from '../../config/dbErrorHandler';
import User from './service';

class UserController {
    private UserService: User;

    constructor() {
        this.UserService = new User();
    }

    getAll(req: Request, res: Response) {
        this.UserService
            .getAll()
            .then(lodash.partial(onSuccess, res))
            .catch(lodash.partial(onError, res, `Error ao buscar todos os usuários`));
    }

    createUser(req: Request, res: Response) {
        this.UserService
            .create(req.body)
            .then(lodash.partial(onSuccess, res))
            .catch(lodash.partial(dbErrorHandler, res))
            .catch(lodash.partial(onError, res, `Error ao criar um usuário`));
    }

    getById(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        this.UserService
            .getById(userId)
            .then(lodash.partial(onSuccess, res))
            .catch(lodash.partial(onError, res, `Error ao buscar um usuário`));
    }

    updateUser(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        const props = req.body;
        this.UserService
            .update(userId, props)
            .then(lodash.partial(onSuccess, res))
            .catch(lodash.partial(onError, res, `Error ao atualizar um usuário`));
    }

    deleteUser(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        this.UserService
            .delete(userId)
            .then(lodash.partial(onSuccess, res))
            .catch(lodash.partial(onError, res, `Error ao deletar um usuário`));
    }
}

export default UserController;