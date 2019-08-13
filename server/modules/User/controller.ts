import { Request, Response } from 'express';
import * as HttpStatus from 'http-status';

class UserController {
    constructor() {}

    getAll(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({
            message: 'OK'
        });
    }

    createUser(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({
            message: 'OK'
        });
    }

    getById(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({
            message: 'OK'
        });
    }

    updateUser(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({
            message: 'OK'
        });
    }

    deleteUser(req: Request, res: Response) {
        res.status(HttpStatus.OK).json({
            message: 'OK'
        });
    }
}

export default UserController;