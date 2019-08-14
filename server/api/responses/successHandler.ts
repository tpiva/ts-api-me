import { Response } from 'express';
import * as HttpStatus from 'http-status';

export function onSuccess(res: Response, data: any) {
    res.status(HttpStatus.OK).json({ payload: data });
}