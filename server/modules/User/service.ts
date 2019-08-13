import { IUser, IUserDetail, createUser, createUsers, createUserById, createUserByEmail } from './interface';
import * as BlueBird from 'bluebird';

const model = require('../../models');

class User implements IUser {
    public id: number;
    public name: string;
    public email: string;
    public password: string;

    constructor(){}

    create(user: any){
        return model.User.create(user);
    }

    getAll(): BlueBird<IUser[]>{
        return model.User.findAll({
            order: ['name']
        })
        .then(createUser);
    }

    getById(id: number): BlueBird<IUserDetail>{}
    getByEmail(email: string): BlueBird<IUserDetail>{}
    update(id: number, user: any){}
}