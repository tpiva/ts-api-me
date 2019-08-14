import { Request, Response } from 'express';
import * as HttpStatus from 'http-status';
import User from './service';

class UserController {
    private UserService: User;

    constructor() {
        this.UserService = new User();
    }

    getAll(req: Request, res: Response) {
        this.UserService
            .getAll()
            .then(data => {
                res.status(HttpStatus.OK).json({ payload: data });
            })
            .catch(_err => {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao procurar todos os usuários' });
            });
    }

    createUser(req: Request, res: Response) {
        this.UserService
            .create(req.body)
            .then((data) => {
                res.status(HttpStatus.OK).json({ payload: data });
            }).catch((_err) => {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao cadastrar novo usuário' });
            });
    }

    getById(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        this.UserService
            .getById(userId)
            .then((data) => {
                res.status(HttpStatus.OK).json({ payload: data });
            }).catch((_err) => {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao procurar um usuário' });
            });
    }

    updateUser(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        const props = req.body;
        this.UserService
            .update(userId, props)
            .then((data) => {
                res.status(HttpStatus.OK).json({ payload: data });
            }).catch((_err) => {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao atualizar um usuário' });
            });
    }

    deleteUser(req: Request, res: Response) {
        const userId = parseInt(req.params.id);
        this.UserService
            .delete(userId)
            .then((data) => {
                res.status(HttpStatus.OK).json({ payload: data });
            }).catch((_err) => {
                res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ payload: 'Erro ao deletar um usuário' });
            });
    }
}

export default UserController;