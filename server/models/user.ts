import * as bscrypt from 'bcrypt';

export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: false
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
            validate: {
                notEmpty: false,
            }
        }
    }, {
        freezeTableName: true
    });

    User.beforeCreate((user) => {
        return hashPassword(user);
    });

    User.beforeUpdate((user) => {
        return hashPassword(user);
    });
    

    function hashPassword(user: any) {
        const salt = bscrypt.genSaltSync(10);
        user.set('password', bscrypt.hashSync(user.password, salt));
    }

    return User;
}