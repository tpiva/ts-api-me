import { Response } from 'express';
import * as HttpStatus from 'http-status';

export function onError(res: Response, message: string, err: any) {
    console.log(`Error: ${err}`);
    res.status(HttpStatus.INTERNAL_SERVER_ERROR).send(message);
}